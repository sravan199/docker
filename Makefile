include .env


start-dockerfile:
	docker build -f Dockerfile.dev -t sravanreddyguduru7/angular-client:v1.11 . 
	docker run -p $(PORT):$(PORT) -p$(DEV_PORT):$(DEV_PORT) --name $(conatiner_name) sravanreddyguduru7/angular-client:v1.11 

start:
	docker-compose -f Docker-compose-dev.yaml build
	docker-compose -f Docker-compose-dev.yaml up

build:
	docker rm -f $(conatiner_name)
	docker build -f Dockerfile.dev -t sravanreddyguduru7/angular-client:v1.11 . 
	docker run -p $(PORT):$(PORT) --name $(conatiner_name) sravanreddyguduru7/angular-client:v1.11 
	docker cp $(conatiner_name):/usr/app/dist .

start-prod:
	docker-compose build
	docker-compose up

start-prod-dockerfile:
	docker build -t sravanreddyguduru7/angular-client:v1.11 . 
	docker run -p $(PORT):$(DEFAULT_PORT) sravanreddyguduru7/angular-client:v1.11 npm run startproduction