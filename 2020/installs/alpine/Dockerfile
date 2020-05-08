FROM alpine

RUN apk update && \
    apk upgrade && \
    apk add unit

EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
