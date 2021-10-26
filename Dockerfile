FROM node:16 AS BUILDER
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/schema.gql ./
RUN npm ci --only=prod
EXPOSE 8080
CMD ["npm", "run", "start:prod"]