FROM node AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY public public
COPY src src
COPY babel.config.js babel.config.js
COPY tsconfig.json tsconfig.json
COPY .browserslistrc .browserslistrc
COPY .eslintrc.js .eslintrc.js
RUN npm run build

FROM nginx:1.12.2 AS final
WORKDIR /usr/share/nginx/html
COPY install/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .
EXPOSE 80
