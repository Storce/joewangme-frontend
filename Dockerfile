# Builder
FROM node:20-alpine as builder

WORKDIR /joewang.me

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production
FROM node:20-alpine

WORKDIR /joewang.me
COPY --from=builder /joewang.me/.next ./.next
COPY --from=builder /joewang.me/public ./public
COPY --from=builder /joewang.me/package.json ./package.json
COPY --from=builder /joewang.me/package-lock.json ./package-lock.json
COPY --from=builder /joewang.me/node_modules ./node_modules

EXPOSE 3000 

CMD ["npm", "start"]