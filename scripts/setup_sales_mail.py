#!/usr/bin/env python3
"""Verify Tencent Exmail SMTP access and store the app password in Keychain."""

from __future__ import annotations

import getpass
import smtplib
import ssl
import subprocess
import sys
from pathlib import Path


SMTP_HOST = "smtp.exmail.qq.com"
SMTP_PORT = 465
SMTP_ACCOUNT = "sales@linstarwood.com"
KEYCHAIN_SERVICE = "com.linstarwood.sales.smtp"
KEYCHAIN_PATH = Path.home() / "Library" / "Keychains" / "login.keychain-db"


def main() -> int:
    print("Tencent Exmail SMTP setup")
    print(f"Account: {SMTP_ACCOUNT}")
    print("Enter the client-specific password, not the mailbox login password.")
    password = getpass.getpass("Client-specific password: ")
    if not password:
        print("No password entered; nothing changed.", file=sys.stderr)
        return 1

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL(
            SMTP_HOST, SMTP_PORT, context=context, timeout=20
        ) as smtp:
            smtp.login(SMTP_ACCOUNT, password)
    except smtplib.SMTPAuthenticationError as exc:
        server_message = exc.smtp_error.decode("utf-8", errors="replace")
        print(
            f"SMTP authentication failed ({exc.smtp_code}: {server_message}).",
            file=sys.stderr,
        )
        print(
            "Check that IMAP/SMTP access is enabled and use a newly generated "
            "client-specific password, not the mailbox login password.",
            file=sys.stderr,
        )
        return 2
    except OSError as exc:
        print(f"Could not connect to Tencent Exmail: {exc}", file=sys.stderr)
        return 3

    result = subprocess.run(
        [
            "/usr/bin/security",
            "add-generic-password",
            "-U",
            "-a",
            SMTP_ACCOUNT,
            "-s",
            KEYCHAIN_SERVICE,
            "-w",
            password,
            str(KEYCHAIN_PATH),
        ],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print(result.stderr.strip() or "Could not update Keychain.", file=sys.stderr)
        return 4

    verify = subprocess.run(
        [
            "/usr/bin/security",
            "find-generic-password",
            "-a",
            SMTP_ACCOUNT,
            "-s",
            KEYCHAIN_SERVICE,
            str(KEYCHAIN_PATH),
        ],
        check=False,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    password = ""
    if verify.returncode != 0:
        print("Keychain verification failed; the credential was not stored.", file=sys.stderr)
        return 5

    print("SMTP verified. The client-specific password is stored in macOS Keychain.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
