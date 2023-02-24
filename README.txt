
//docker
docker-compose -f docker-compose-pg-only.yml up  
docker-compose -f docker-compose-pg-only.yml down --volumes


//dev server
cd src/main/frontend/my-app/
yarn run