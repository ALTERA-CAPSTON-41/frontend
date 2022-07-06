FROM node:14.19-alpine3.14 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run lint && npm run build

# runner -- automatically exposed at 3000
FROM node:14.19-alpine3.14
RUN npm install -g serve
COPY --from=builder /app/dist /app
WORKDIR /app
EXPOSE 5000

CMD [ "serve", "-s", "." ]
