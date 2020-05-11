FROM nginx/unit


RUN apt update && \
    apt install -y wget gnupg

RUN wget http://nginx.org/keys/nginx_signing.key && \
    apt-key add nginx_signing.key

ADD unit.list /etc/apt/sources.list.d/unit.list

RUN apt update && \
    apt install -y nodejs npm unit-dev && \
    mkdir /var/app

ADD / /var/app/

WORKDIR /var/app/

RUN npm install

ADD /unit-conf.json /docker-entrypoint.d/

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
