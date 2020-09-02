# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!

# Remember: DATA is a JSON string

#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
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