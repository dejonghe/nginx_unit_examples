FROM nginx/unit

RUN mkdir /var/app
WORKDIR /var/app

RUN apt update && \
    apt install -y python3 python3-pip && \
    python3 -m pip install flask

ADD app.py /var/app/

RUN chown -R nobody:nogroup /var/app

ADD /unit-conf.json /docker-entrypoint.d/

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
