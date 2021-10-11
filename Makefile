up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
init:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec api yarn init
	docker-compose exec api yarn add --dev typescript ts-node prettier @types/node
	docker-compose exec api ./node_modules/.bin/tsc --init
	docker-compose exec api yarn add --dev nodemon
	docker-compose exec api yarn global add express-generator
	docker-compose exec api yarn add express
	docker-compose exec api yarn add --dev @types/express
	docker-compose exec api yarn add --dev dotenv @types/validator @types/bluebird @types/cors @types/dotenv
	docker-compose exec front npx create-next-app front --typescript
	docker-compose exec front yarn add --dev typescript @types/react @types/react-dom @types/node
	docker-compose exec front yarn add --dev tailwindcss postcss autoprefixer postcss-nested
	docker-compose exec front yarn tailwindcss init -p
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-back:
	docker-compose logs backend
log-back-watch:
	docker-compose logs --follow backend
log-front:
	docker-compose logs frontend
log-front-watch:
	docker-compose logs --follow frontend
log-db:
	docker-compose logs db
log-db-watch:
	docker-compose logs --follow db
back:
	docker exec -it zenn_api sh
db:
	docker exec -it zenn_db sh
sql:
	docker-compose exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
