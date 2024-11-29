source "https://rubygems.org"

gem "jekyll", "~> 4.0"
gem "webrick", "~> 1.7"
# gem "blogtheme", :git => "https://github.com/nathanjessen/blogtheme", :branch => "master"
# gem "blogtheme", path: "/home/simple/www/blogtheme"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-feed", "~> 0.9"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
