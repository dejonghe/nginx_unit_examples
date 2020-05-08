FROM nginx/unit

WORKDIR /var/

RUN apt update && \
    apt install -y python3 python3-pip && \
    python3 -m pip install Django && \
    django-admin startproject app

ADD settings.py /var/app/app/settings.py

RUN chown -R nobody:nogroup /var/app

ADD /unit-conf.json /var/lib/unit/conf.json

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
