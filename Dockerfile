FROM ruby:3.1-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Create jekyll user first
RUN groupadd -r jekyll && useradd -m -r -g jekyll jekyll
RUN mkdir -p /srv/jekyll && chown -R jekyll:jekyll /srv/jekyll

WORKDIR /srv/jekyll

# Install gems globally first
RUN gem install bundler:2.1.4
COPY Gemfile* ./
RUN bundle config set system 'true' && \
    bundle install && \
    chown -R jekyll:jekyll /usr/local/bundle

# Switch to jekyll user
USER jekyll
ENV HOME=/home/jekyll

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--trace"]
