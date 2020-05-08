FROM nginx/unit

ADD /index.php /var/www/app/
ADD /myfile /var/www/static/wiki/

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
