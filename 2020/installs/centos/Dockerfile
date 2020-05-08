FROM centos:7

ADD unit.repo /etc/yum.repos.d/unit.repo

RUN yum install -y unit && \
    mkdir /var/run/unit

EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
