#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from livereload import Server

AUTHOR = 'Omer Kaplan'
SITENAME = '/project'
SITEURL = ''
ARTICLE_URL = 'posts/{date:%Y}/{slug}/'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{slug}/index.html'
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = 'en'

LOCALE = 'en_US'

THEME = './theme/minimalist/'

PLUGINS = ['neighbors','readtime','related_posts']

DEFAULT_ORPHANS = 0

DEFAULT_PAGINATION = 4

PAGINATED_TEMPLATES = {'index': 4, 'tag': 4, 'category': 4, 'author': 4}

PAGINATION_PATTERNS = (
    (1, '{url}', '{save_as}'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

FORMATTED_FIELDS = ['']

# Static paths tells Pelican to copy those assets to the output directory
STATIC_PATHS = ['extra/CNAME']

EXTRA_PATH_METADATA = {
    'static/favicon/favicon.ico': {'path': 'favicon.ico'},
    'extra/CNAME': {'path': 'CNAME'},
    }
# related posts plugin

RELATED_POSTS_MAX = 3 #I tried 5 but its messed up on some resolutions
