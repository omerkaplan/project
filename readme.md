## Useful commands


| Task                                             | Command                                                      |
| ------------------------------------------------ | ------------------------------------------------------------ |
| Preview the site locally + build if changes made | `pelican content --autoreload --listen -s pelicanconf.py`    |
| Watch SCSS & auto-compile into theme css         | `sass --watch theme/minimalist/static/_scss/custom.scss:theme/minimalist/static/css/custom.css` |
| Free up port 8000 in case I mess up processes    | `lsof -i :8000` → then `kill -9 <PID>`                       |


## Deploying things

*** dont checkout to ph-pages or all bad things will happen ***

Update 4/2 2023: Since you didn't listen and committed things to the gh-pages branch, bad stuff did happen and we had to reset the entire branch. Do the steps below and no one will get hurt.

Got new content? great!

1. pelican content -o output -s pelicanconf.py
2. ghp-import output -b gh-pages
3. git push origin gh-pages
