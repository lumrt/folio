#!/bin/sh
set -eu

# Railway injects PORT at runtime; fall back to 8080 for local dev.
: "${PORT:=8080}"

echo "[entrypoint] PORT=${PORT}"
echo "[entrypoint] rendering /etc/nginx/conf.d/default.conf"

# Only substitute $PORT so nothing else (e.g. nginx vars like $uri) is touched.
envsubst '${PORT}' \
  < /etc/nginx/templates/default.conf.template \
  > /etc/nginx/conf.d/default.conf

nginx -t

echo "[entrypoint] starting nginx on 0.0.0.0:${PORT}"
exec nginx -g 'daemon off;'
