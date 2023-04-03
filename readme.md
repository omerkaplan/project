## Coding things

1. source ./bin/activate
2. pelican --listen
3. pelican -r
4. mess around with code

## Deploying things

*** dont checkout to ph-pages or all bad things will happen ***

$ pelican content -o output -s pelicanconf.py
$ ghp-import output -b gh-pages
$ git push origin gh-pages
