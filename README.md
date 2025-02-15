# Live reloading of node app via docker compose

# To build first time
```
docker compose up --build
```

# To run
```
docker compose up
```

# You can install new dependency by running
```
docker exec <your-container-id> npm install <your-package> --save
```