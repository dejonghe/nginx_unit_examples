:warning: :heavy_multiplication_x: This is only meant to test a basic install, it does not configure a database and therefore will not actually serve. I'm just testing the steps in the NGINX Unit Cookbook.
# Build

```
docker build -t unit-real-wordpress .
```

# Run

```
docker run -it unit-real-wordpress
```

# Exercise

```
curl http://<container_ip>:8090
```
