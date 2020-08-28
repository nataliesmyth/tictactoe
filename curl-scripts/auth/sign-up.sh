# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
curl "API LINK GOES HERE" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo