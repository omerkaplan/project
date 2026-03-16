# omerk.me

Personal website built with [Pelican](https://getpelican.com/) and deployed to Cloudflare via GitHub.

## Setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Local development

Run both commands in separate terminal tabs:

**Auto-regenerate & serve the site**
```bash
pelican content --autoreload --listen -s pelicanconf.py
```
Site is available at `http://localhost:8000`

**Watch & compile SCSS**
```bash
sass --watch theme/minimalist/static/_scss/custom.scss:theme/minimalist/static/css/custom.css
```

If port 8000 is stuck:
```bash
lsof -i :8000   # find the PID
kill -9 <PID>
```

## Deploying

The site deploys automatically — just push to `master`:

```bash
git add content/pages/your-file.md
git commit -m "your message"
git push
```

Cloudflare picks up the push, builds the site, and deploys to `omerk.me`. You can monitor build progress in the Cloudflare dashboard under **Workers & Pages → project → Deployments**.
