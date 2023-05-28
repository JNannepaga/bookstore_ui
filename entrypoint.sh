#!/bin/sh
echo "Bookstore Api Url: $REACT_APP_BOOKSTORE_API_BASE_URL"
echo "Installing dependecies of generate-env.js"
npm install minimist dotenv dotenv-expand
node generate-env.js --target build
exec npm run serve "$@"