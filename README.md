# shashibhushanjha.me

Personal academic portfolio and research CV for Shashi Bhushan Jha, presenting mathematical and simulation-based work in wireless communications and broad research interests across ISAC, NTN, satellite, optical, quantum, and other future 6G communication technologies. The site is built with plain HTML, CSS, and JavaScript and is published through GitHub Pages at [shashibhushanjha.me](https://shashibhushanjha.me/).

## Main files

- `index.html` — portfolio, research summary, education, experience, projects, certificates, and contact information
- `research-interests.html` — central roadmap separating demonstrated research from active learning directions
- `quantum-communication.html`, `isac.html`, `ntn-satellite-communication.html`, `optical-communication.html`, and `future-6g.html` — dedicated mathematics-first learning tracks with curated source material
- `research-interests.css` — shared design system for the research-interest hub and topic pages
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

The chatbot UI sends a compact current-profile context from `index.html` to the external API. The context explicitly distinguishes completed NOMA research from the emerging-topic learning tracks. If the separate backend knowledge base changes, update and redeploy that service as well.

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
