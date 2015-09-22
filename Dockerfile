FROM node:latest

MAINTAINER jackfrancis@gmail.com

COPY src/ /src
WORKDIR /src
RUN apt-get update && apt-get install -y nginx
RUN npm install -g ember-cli && npm install -g bower
RUN npm install
RUN bower install --allow-root
RUN ember build
RUN ln -s /src/nginx.conf /etc/nginx/sites-enabled/ember_app.conf

EXPOSE 8001

CMD ["nginx", "-g", "daemon off;"]