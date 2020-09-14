curl 'https://tic-tac-toe-api-production.herokuapp.com/games/:id' \
--include \
--request GET \
--header 'Content-Type: application/json' \
--header "Authorization: Token ${TOKEN}" \
--header "Authorization: ID"${ID}



echo