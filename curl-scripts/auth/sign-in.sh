# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo