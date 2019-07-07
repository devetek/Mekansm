FROM node:lts-alpine

workdir /devetek

COPY Makefile .
COPY tslint.json .
COPY .prettierrc .
COPY angular.json .
COPY package.json .
COPY tsconfig.json .
COPY package-lock.json .
COPY ionic.config.json .
COPY capacitor.config.json .

RUN set -ex; npm install;

EXPOSE 4200