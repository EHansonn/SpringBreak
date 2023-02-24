Who knows what this could turn out to be.
So far I have my postgres db running inside docker and the java backend is setup enough to start working on the front end

## docker

```
docker-compose -f docker-compose-pg-only.yml up
docker-compose -f docker-compose-pg-only.yml down --volumes
```

## dev server

cd src/main/frontend/my-app/ <br />

`yarn run start`
