# Build

```
docker build -t unit-config-upstream .
```

# Run

```
docker run -it unit-config-upstream
```

# Excersise

```
curl -X PUT -d @application-object.json http://<container_ip>:5000/config/applications/app-name
curl -X PUT -d '{"*:8080":{"pass":"applications/app-name"}}' http://<container_ip>:5000/config/listeners
curl -X PUT -d '{"main":[{"match":{"uri":"/wiki/*"},"action":{"share":"/var/www/static/"}}]}' http://<container_ip>:5000/config/routes
curl -X POST -d '{"action":{"pass":"applications/app-name"}}' http://<container_ip>:5000/config/routes/main
curl -X PUT -d '"routes/main"' http://<container_ip>:5000/config/listeners/*:8080/pass
curl http://<container_ip>:5000/config -o config.json
curl -X PUT -d @config.json http://<container_ip>:5000/config 
curl http://<container_ip>:8080/
curl http://<container_ip>:8080/wiki/myfile
```
