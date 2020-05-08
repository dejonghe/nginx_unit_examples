# Build

```
docker build -t unit-config-limit-req .
```

# Run

```
docker run -it unit-config-limit-req
```

# Exercise

```
for i in $(seq 1 20); do curl http://<container_port>:8080/ ; done
```

You should see the app restart in the console a few times because the number of requests that a process can handle is set to 5.
