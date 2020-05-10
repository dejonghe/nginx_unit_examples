# Build

```
docker build -t unit-config-isolation .
```

# Run

```
sudo docker run --rm -it --security-opt seccomp=unconfined unit-config-isolation
```

# Exercise

```
curl http://<container_ip>:8080
```
