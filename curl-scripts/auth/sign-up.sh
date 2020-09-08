# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# Remember: DATA is a JSON string

#!/bin/bash

API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo