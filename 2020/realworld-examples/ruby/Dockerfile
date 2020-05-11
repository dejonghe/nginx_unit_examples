FROM nginx/unit

WORKDIR /var/

RUN apt update && \
    apt install -y curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install -y git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn

RUN cd && \
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc && \
    exec $SHELL && \
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
    echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc && \
    exec $SHELL 

RUN /root/.rbenv/bin/rbenv install 2.5.5 && \
    /root/.rbenv/bin/rbenv global 2.5.5 && \
    ruby -v

RUN apt-get install -y libgdbm-dev libncurses5-dev automake libtool bison libffi-dev ruby-dev && \
    gem install rails


RUN mkdir /var/app
WORKDIR /var/app

RUN rails new ruby_app

RUN chown -R nobody:nogroup /var/app

ADD /unit-conf.json /docker-entrypoint.d/

EXPOSE 8080
EXPOSE 5000
CMD [ "unitd", "--no-daemon", "--control", "0.0.0.0:5000" ]
