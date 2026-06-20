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

COPY --from=build /app/dist /usr/share/nginx/html

# Drop the default conf and use a templated one so $PORT (Railway) is honored
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

ENV PORT=8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
