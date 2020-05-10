FROM nginx/unit

ADD / /var/www/app/

ADD /unit-conf.json /docker-entrypoint.d/

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
