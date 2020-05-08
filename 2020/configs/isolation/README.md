# Build

:warning: :heavy_multiplication_x: This straight up doesn't work in the provided container. I've tried removing the uname flag along with the uidmap, and gidmap. Likely because we're running within a container already.

```
docker build -t unit-config-isolation .
```

# Run

```
docker run -it unit-config-isolation
```

# Excersise

```
curl http://<container_ip>:8080
```
