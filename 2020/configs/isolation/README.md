:warning: :heavy_multiplication_x: This straight up doesn't work in the provided container. I've tried removing the uname flag along with the uidmap, and gidmap. Likely because we're running within a container already.

# Build

```
docker build -t unit-config-isolation .
```

# Run

```
docker run -it unit-config-isolation
```

# Exercise

```
curl http://<container_ip>:8080
```
