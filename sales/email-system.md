# Sales Email System

The sales mailbox uses Tencent Exmail SMTP over SSL:

- Account: `sales@linstarwood.com`
- Server: `smtp.exmail.qq.com`
- Port: `465`
- Keychain service: `com.linstarwood.sales.smtp`

The mailbox login password must never be stored in this repository. Generate a
client-specific password in Tencent Exmail and run:

```sh
python3 scripts/setup_sales_mail.py
```

The setup tool verifies SMTP access and stores the credential in macOS
Keychain. It does not write the credential to a project file.

## Sending

Prepare a UTF-8 plain-text body file, then preview the message:

```sh
python3 scripts/send_sales_email.py \
  --to supply@example.com \
  --subject "Film-Faced Plywood Supply" \
  --body-file /path/to/message.txt
```

The default is a dry run. Add `--send` only after the recipient, subject and
body are approved. The command asks for a final terminal confirmation unless
`--yes` is also supplied.

Every successful send is appended to `sales/mail-log.jsonl`. Check both that
log and `sales/prospects-master.csv` before contacting a prospect again.

