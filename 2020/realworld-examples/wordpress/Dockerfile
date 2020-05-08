FROM nginx/unit

RUN mkdir /var/app
WORKDIR /var/app

RUN apt update && \
    apt install wget php7.3-mysql

RUN wget https://wordpress.org/latest.tar.gz && \
    tar xzvf latest.tar.gz && \
    chown -R nobody:nogroup ./ && \
    find /var/app/wordpress/ -type d -exec chmod g+s {} \; && \
    chmod g+w /var/app/wordpress/wp-content && \
    chmod -R g+w /var/app/wordpress/wp-content/themes && \
    chmod -R g+w /var/app/wordpress/wp-content/plugins

ADD /wp-config.php /var/app/wordpress/wp-config.php
ADD /unit-conf.json /var/lib/unit/conf.json

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
