#!/bin/zsh

cd "$(dirname "$0")" || exit 1
python3 scripts/setup_sales_mail.py
exit_code=$?

echo
if [[ $exit_code -eq 0 ]]; then
  echo "Setup complete. You can close this window."
else
  echo "Setup did not complete. Review the message above."
fi
read -r "?Press Enter to close..."
exit $exit_code
