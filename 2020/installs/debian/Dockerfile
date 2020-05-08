FROM debian:10


RUN apt update && \
    apt install -y wget gnupg

RUN wget http://nginx.org/keys/nginx_signing.key && \
    apt-key add nginx_signing.key

ADD unit.list /etc/apt/sources.list.d/unit.list

RUN apt update && \
    apt install -y unit

EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
