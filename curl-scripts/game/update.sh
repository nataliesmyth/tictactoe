curl 'https://tic-tac-toe-api-production.herokuapp.com/games/' + ${_ID}\
--include \
--request PATCH \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
}'




echo