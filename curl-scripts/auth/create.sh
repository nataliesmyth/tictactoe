# VARIABLE=VALUE sh curl-scripts/auth/create.sh

curl --include --request POST "https://library-express-api.herokuapp.com/create/" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo