#!/usr/bin/env python3
"""Preview or send one sales email through Tencent Exmail SMTP."""

from __future__ import annotations

import argparse
import datetime as dt
import getpass
import json
import mimetypes
import smtplib
import ssl
import subprocess
import sys
from email.message import EmailMessage
from email.utils import formataddr, make_msgid
from pathlib import Path


SMTP_HOST = "smtp.exmail.qq.com"
SMTP_PORT = 465
SMTP_ACCOUNT = "sales@linstarwood.com"
SENDER_NAME = "Linstar Wood"
KEYCHAIN_SERVICE = "com.linstarwood.sales.smtp"
KEYCHAIN_PATH = Path.home() / "Library" / "Keychains" / "login.keychain-db"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
MAIL_LOG = PROJECT_ROOT / "sales" / "mail-log.jsonl"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--to", required=True, help="One recipient email address")
    parser.add_argument("--subject", required=True)
    parser.add_argument("--body-file", required=True, type=Path)
    parser.add_argument("--attach", action="append", default=[], type=Path)
    parser.add_argument("--in-reply-to")
    parser.add_argument("--references")
    parser.add_argument(
        "--send",
        action="store_true",
        help="Send after preview. Without this option, the command is dry-run only.",
    )
    parser.add_argument(
        "--yes",
        action="store_true",
        help="Skip the terminal confirmation. Use only after the batch is approved.",
    )
    return parser.parse_args()


def keychain_password() -> str:
    result = subprocess.run(
        [
            "/usr/bin/security",
            "find-generic-password",
            "-a",
            SMTP_ACCOUNT,
            "-s",
            KEYCHAIN_SERVICE,
            "-w",
            str(KEYCHAIN_PATH),
        ],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(
            "SMTP credential not found. Run scripts/setup_sales_mail.py first."
        )
    return result.stdout.rstrip("\n")


def build_message(args: argparse.Namespace) -> EmailMessage:
    body_path = args.body_file.expanduser().resolve()
    body = body_path.read_text(encoding="utf-8")
    message = EmailMessage()
    message["From"] = formataddr((SENDER_NAME, SMTP_ACCOUNT))
    message["To"] = args.to.strip()
    message["Subject"] = args.subject.strip()
    message["Message-ID"] = make_msgid(domain="linstarwood.com")
    if args.in_reply_to:
        message["In-Reply-To"] = args.in_reply_to.strip()
    if args.references:
        message["References"] = args.references.strip()
    message.set_content(body)

    for attachment in args.attach:
        path = attachment.expanduser().resolve()
        mime_type, _ = mimetypes.guess_type(path.name)
        major, minor = (mime_type or "application/octet-stream").split("/", 1)
        message.add_attachment(
            path.read_bytes(), maintype=major, subtype=minor, filename=path.name
        )
    return message


def log_success(message: EmailMessage) -> None:
    MAIL_LOG.parent.mkdir(parents=True, exist_ok=True)
    record = {
        "sent_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "from": SMTP_ACCOUNT,
        "to": message["To"],
        "subject": message["Subject"],
        "message_id": message["Message-ID"],
        "in_reply_to": message.get("In-Reply-To"),
    }
    with MAIL_LOG.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(record, ensure_ascii=True) + "\n")


def main() -> int:
    args = parse_args()
    try:
        message = build_message(args)
    except (OSError, UnicodeError) as exc:
        print(f"Could not build message: {exc}", file=sys.stderr)
        return 1

    print(f"From: {message['From']}")
    print(f"To: {message['To']}")
    print(f"Subject: {message['Subject']}")
    print(f"Attachments: {len(args.attach)}")
    print("--- Body preview ---")
    print(message.get_body(preferencelist=("plain",)).get_content())

    if not args.send:
        print("Dry run only. Add --send to send this email.")
        return 0
    if not args.yes:
        answer = input("Send this email now? Type SEND to confirm: ").strip()
        if answer != "SEND":
            print("Cancelled; no email was sent.")
            return 0

    try:
        password = keychain_password()
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            SMTP_HOST, SMTP_PORT, context=context, timeout=30
        ) as smtp:
            smtp.login(SMTP_ACCOUNT, password)
            smtp.send_message(message)
        password = ""
    except (OSError, RuntimeError, smtplib.SMTPException) as exc:
        print(f"Send failed: {exc}", file=sys.stderr)
        return 2

    log_success(message)
    print(f"Sent to {message['To']}. Logged in {MAIL_LOG}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
