FROM ruby:3.3.10-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

# Create unprivileged user
RUN groupadd --gid 1000 app && \
    useradd --uid 1000 --gid app --shell /bin/bash --create-home app && \
    chown -R app:app /srv/jekyll && \
    mkdir -p /home/app/.gems && \
    chown -R app:app /home/app/.gems

ENV GEM_HOME=/home/app/.gems
ENV PATH=/home/app/.gems/bin:$PATH

USER app

RUN gem install bundler:2.6.6

COPY --chown=app:app Gemfile* ./
RUN bundle _2.6.6_ install

EXPOSE 4000 35729

USER root
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

USER app

ENTRYPOINT ["docker-entrypoint.sh"]
