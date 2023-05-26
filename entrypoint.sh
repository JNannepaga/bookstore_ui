#!/bin/sh
echo $REACT_APP_BASE_URL
exec npm run serve "$@"