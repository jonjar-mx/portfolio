# ---------- BASE ----------
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install


# ---------- DEV ----------
FROM base AS dev
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]


# ---------- BUILD ----------
FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build


# ---------- PROD ----------
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
