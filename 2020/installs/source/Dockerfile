FROM centos:7

RUN rpm --import https://mirror.go-repo.io/centos/RPM-GPG-KEY-GO-REPO && \
    curl -s https://mirror.go-repo.io/centos/go-repo.repo | tee /etc/yum.repos.d/go-repo.repo

RUN yum update -y && \
    yum install -y gcc gcc-c++ make unzip which && \
    yum install -y golang && \
    yum install -y php-devel php-embedded && \
    yum install -y perl perl-devel perl-libs perl-ExtUtils-Embed && \
    yum install -y python python-devel && \
    yum install -y ruby-devel && \
    yum install -y java-1.8.0-openjdk-devel && \
    yum install -y openssl-devel 

RUN curl -sL \
      https://rpm.nodesource.com/setup_10.x \
      | bash -; yum install -y nodejs npm; npm install -y -g node-gyp 

RUN curl -O https://unit.nginx.org/download/unit-1.17.0.tar.gz && \
    tar xzf unit-1.17.0.tar.gz && \
    cd unit-1.17.0 && \
    ./configure --prefix=/opt/unit/ && \
    ./configure go && \
    ./configure perl && \
    ./configure php && \
    ./configure python && \
    ./configure ruby && \
    ./configure nodejs && \
    ./configure java && \
    make && \
    make go-install && \
    make node-install && \
    make install

RUN ln -s /unit-1.17.0/build/unitd /usr/sbin/unitd

EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
