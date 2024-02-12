# Brew-journal API

Spring-boot powered API for Brew-journal app

## Start database container

`docker compose up -d`

## Run locally

`./mvnw spring-boot:run -Dspring-boot.run.profiles=dev`

Ensure that `application-dev.properties` exists in  `/src/main/resources` directory.

## Manual deploy

`./mvnw package appengine:deploy`