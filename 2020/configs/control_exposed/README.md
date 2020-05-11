# Build

```
docker build -t unit-config-control .
```

# Run

```
docker run -it unit-config-control
```

# Exercise

```
CONTINER_IP=<container_ip>
curl -X PUT -d @application-object.json http://${CONTAINER_IP}:5000/config/applications/app-name
curl -X PUT -d '{"*:8080":{"pass":"applications/app-name"}}' http://${CONTAINER_IP}:5000/config/listeners
curl -X PUT -d '{"main":[{"match":{"uri":"/wiki/*"},"action":{"share":"/var/www/static/"}}]}' http://${CONTAINER_IP}:5000/config/routes
curl -X POST -d '{"action":{"pass":"applications/app-name"}}' http://${CONTAINER_IP}:5000/config/routes/main
curl -X PUT -d '"routes/main"' http://${CONTAINER_IP}:5000/config/listeners/*:8080/pass
curl http://${CONTAINER_IP}:5000/config -o config.json
curl -X PUT -d @config.json http://${CONTAINER_IP}:5000/config 
curl http://${CONTAINER_IP}:8080/
curl http://${CONTAINER_IP}:8080/wiki/myfile
```
