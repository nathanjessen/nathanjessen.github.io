#!/bin/bash
set -e

export GEM_HOME="$HOME/.gems"
export PATH="$GEM_HOME/bin:$PATH"

git config --global --add safe.directory /srv/jekyll

bundle check || bundle install

exec bundle exec jekyll serve \
  --host 0.0.0.0 \
  --livereload
