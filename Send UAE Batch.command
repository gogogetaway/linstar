#!/bin/zsh

cd "$(dirname "$0")" || exit 1

log_file="sales/outbox/2026-08-18/send-result.log"
: > "$log_file"

{
  echo "started_at=$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  python3 scripts/send_sales_batch.py sales/outbox/2026-08-18/batch.json --send --yes
  exit_code=$?
  echo "exit_code=$exit_code"
  echo "finished_at=$(date -u +%Y-%m-%dT%H:%M:%SZ)"
} >> "$log_file" 2>&1

cat "$log_file"
echo
read -r "?Press Enter to close..."
