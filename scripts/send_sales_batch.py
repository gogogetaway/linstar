#!/usr/bin/env python3
"""Validate and optionally send a reviewed sales-email batch manifest."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SENDER = PROJECT_ROOT / "scripts" / "send_sales_email.py"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--send", action="store_true")
    parser.add_argument("--yes", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    manifest_path = args.manifest.expanduser().resolve()
    batch = json.loads(manifest_path.read_text(encoding="utf-8"))
    if not isinstance(batch, list) or not batch:
        raise ValueError("Batch manifest must contain a non-empty list.")

    recipients: set[str] = set()
    prepared: list[tuple[dict[str, str], Path]] = []
    for index, item in enumerate(batch, start=1):
        for field in ("company", "to", "subject", "body_file"):
            if not item.get(field):
                raise ValueError(f"Item {index} is missing {field}.")
        recipient = item["to"].strip().lower()
        if recipient in recipients:
            raise ValueError(f"Duplicate recipient in batch: {recipient}")
        recipients.add(recipient)
        body_path = manifest_path.parent / item["body_file"]
        if not body_path.is_file():
            raise FileNotFoundError(body_path)
        prepared.append((item, body_path))

    print(f"Validated {len(prepared)} unique messages:")
    for item, _ in prepared:
        print(f"- {item['company']}: {item['to']} | {item['subject']}")
    if not args.send:
        print("Dry run only. Add --send --yes after the batch is approved.")
        return 0
    if not args.yes:
        print("Batch sending requires both --send and --yes.", file=sys.stderr)
        return 2

    for item, body_path in prepared:
        command = [
            sys.executable,
            str(SENDER),
            "--to",
            item["to"],
            "--subject",
            item["subject"],
            "--body-file",
            str(body_path),
            "--send",
            "--yes",
        ]
        if item.get("in_reply_to"):
            command.extend(["--in-reply-to", item["in_reply_to"]])
        if item.get("references"):
            command.extend(["--references", item["references"]])
        result = subprocess.run(command, cwd=PROJECT_ROOT, check=False)
        if result.returncode != 0:
            print(
                f"Batch stopped after a failure for {item['company']}.",
                file=sys.stderr,
            )
            return result.returncode
    print(f"Batch complete: {len(prepared)} messages sent.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
