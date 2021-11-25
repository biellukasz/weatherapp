FROM node:alpine as builder
RUN apk update && apk add --no-cache make git

WORKDIR /app

WORKDIR /app/nginx
COPY nginx/conf.d/default.conf /app/nginx/

COPY package.json package-lock.json /app/
RUN cd /app && npm set progress=false && npm install

COPY .  /app
RUN cd /app && npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/weatherapp /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
