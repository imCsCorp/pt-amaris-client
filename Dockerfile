FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build -- --configuration production


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/prueba-tecnica-amaris-frontend /usr/share/nginx/html
