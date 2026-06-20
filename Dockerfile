# syntax=docker/dockerfile:1.7

# ---- 1. Build the static site ----
FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .
RUN pnpm build

# ---- 2. Serve with nginx ----
FROM nginx:alpine

# gettext provides envsubst (already in nginx:alpine, but explicit for safety)
RUN apk add --no-cache gettext

COPY --from=build /app/dist /usr/share/nginx/html

# Drop the default conf and use our own
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY docker-entrypoint.sh /docker-entrypoint-folio.sh
RUN chmod +x /docker-entrypoint-folio.sh

ENV PORT=8080
EXPOSE 8080

CMD ["/docker-entrypoint-folio.sh"]
