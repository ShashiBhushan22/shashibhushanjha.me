# shashibhushanjha.me

Personal academic portfolio and research CV for Shashi Bhushan Jha, presenting completed work in classical wireless communications and research interests in quantum communication, QKD, quantum cryptography, and future classical–quantum 6G protocols. The site is built with plain HTML, CSS, and JavaScript and is published through GitHub Pages at [shashibhushanjha.me](https://shashibhushanjha.me/).

## Main files

- `index.html` — portfolio, research summary, education, experience, projects, certificates, and contact information
- `cv-print.html` — canonical, responsive, print-ready academic CV
- `Shashi_Bhushan_Jha_CV.pdf` — downloadable A4 academic CV generated from `cv-print.html`
- `cv.html` — compatibility redirect to the current CV
- `styles.css` and `script.js` — portfolio styling and interactions
- `chat-widget.css` and `chat-widget.js` — chatbot interface and API client
- `sitemap.xml`, `robots.txt`, and `CNAME` — search and custom-domain configuration

## Local preview

From the repository root, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Content maintenance

Professional facts appear in both `index.html` and `cv-print.html`. Update both files together. After changing the printable CV, regenerate `Shashi_Bhushan_Jha_CV.pdf` and verify that it remains a searchable two-page A4 document.

The chatbot UI sends a compact current-profile context from `index.html` to the external API. If the separate backend knowledge base changes, update and redeploy that service as well.

## Deployment

The repository is connected to:

```text
https://github.com/ShashiBhushan22/shashibhushanjha.me.git
```

Publishing is triggered by committing and pushing the `main` branch:

```powershell
git add .
git commit -m "Update research CV and portfolio"
git push origin main
```

GitHub Pages serves the repository root and uses the domain in `CNAME`.

Last updated: August 2026.
