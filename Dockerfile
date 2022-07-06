FROM node:14.19-alpine3.14 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run lint && npm run build

# runner -- automatically exposed at 3000
FROM abhin4v/hastatic:latest
COPY --from=builder /app/dist /opt/dist
WORKDIR /opt/dist

CMD [ "usr/bin/hastatic" ]
