FROM nginx/unit

RUN mkdir /var/app/
WORKDIR /var/app/

RUN apt update && \
    apt install -y python3 python3-pip && \
    python3 -m pip install Django && \
    django-admin startproject example

ADD settings.py /var/app/example/example/settings.py

RUN chown -R nobody:nogroup /var/app/example 

ADD /unit-conf.json /var/lib/unit/conf.json

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
