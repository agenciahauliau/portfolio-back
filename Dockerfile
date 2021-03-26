FROM node:14 AS BUILDER
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:14-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
EXPOSE 8080
CMD ["npm", "run", "start:prod"]