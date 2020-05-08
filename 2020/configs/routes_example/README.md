# Build

```
docker build -t unit-config-routes .
```

# Run

```
docker run -it unit-config-routes
```

# Excersise

```
curl http://<container_ip>:8080
curl http://<container_ip>:8080 -H 'Host: blog.example.com'
```
