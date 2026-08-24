source "https://rubygems.org"

# Jekyll proper, not the `github-pages` gem. That gem is a version-lock bundle
# that pins Jekyll to 3.x to match GitHub's classic Pages builder; the site is
# built and deployed by .github/workflows/jekyll.yml instead, so we track
# upstream Jekyll directly. Run with `bundle exec jekyll serve`.
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
end

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of
# the gem do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.8"
