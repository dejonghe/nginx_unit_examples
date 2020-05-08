# Build

```
docker build -t unit-config-proxy .
```

# Run

```
docker run -it unit-config-proxy
```

# Exercise

```
curl http://<container_ip>:8080
curl http://<container_ip>:8080/wiki
```
