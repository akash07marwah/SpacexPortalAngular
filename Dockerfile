FROM node:alpine

RUN npm install -g @angular/cli@7
WORKDIR /app

ADD package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --port 4200
