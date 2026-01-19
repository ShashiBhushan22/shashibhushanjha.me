# 🌟 Interactive Resume Webpage

A modern, interactive, and responsive personal resume website for **Shashi Bhushan Jha**, built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- ✨ **Smooth Animations**: Scroll-triggered animations and parallax effects
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern Design**: Clean, professional UI with gradient accents
- ⚡ **Fast Loading**: Optimized performance with no external dependencies (except Font Awesome icons)
- 🔄 **Interactive Elements**: Hover effects, animated skill bars, and dynamic counters
- 📧 **Contact Form**: Integrated mailto functionality
- 🎯 **SEO Friendly**: Semantic HTML structure

## 📁 Project Structure

```
my-resume/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete styling with responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with typing effect
2. **About** - Professional summary with statistics
3. **Education** - Timeline view of academic qualifications
4. **Experience** - Detailed work experience cards
5. **Projects** - Showcase of major projects with tech stacks
6. **Skills** - Animated progress bars and certifications
7. **Contact** - Contact form and social links

## 🌐 Hosting on GitHub Pages

### Method 1: Direct Push (Recommended)

1. **Navigate to the repository**:
   ```bash
   cd /home/bhushan-arc/CV_Webpage/my-resume
   ```

2. **Add all files to staging**:
   ```bash
   git add .
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Add interactive resume webpage"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin main
   ```
   
   If your default branch is `master`, use:
   ```bash
   git push origin master
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub: https://github.com/ShashiBhushan22/my-resume
   - Click on **Settings**
   - Scroll down to **Pages** section (left sidebar)
   - Under **Source**, select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click **Save**
   - Your site will be published at: `https://shashibhushan22.github.io/my-resume/`

### Method 2: Using GitHub Actions (Advanced)

Create a `.github/workflows/deploy.yml` file for automatic deployment on every push.

## 📝 Customization Guide

### Update Personal Information

Edit [index.html](index.html):

1. **Contact Details** (Hero & Contact sections):
   - Email: Search for `bhushan.gate2022@gmail.com`
   - Phone: Search for `+91-7091678894`
   - LinkedIn: Search for `shashi-bhushan-jha-9a1922262`

2. **Content**: Update text in each section as needed

### Change Color Scheme

Edit [styles.css](styles.css) in the `:root` section:

```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #1e40af;   /* Darker shade */
    --accent-color: #3b82f6;      /* Lighter accent */
}
```

### Add/Remove Sections

Simply add or remove section blocks in [index.html](index.html). The navigation will automatically adjust.

## 🛠️ Local Development

### View Locally

1. **Simple Python Server** (Python 3):
   ```bash
   cd /home/bhushan-arc/CV_Webpage/my-resume
   python3 -m http.server 8000
   ```
   Open: http://localhost:8000

2. **Using VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Direct File Opening**:
   - Simply double-click `index.html`
   - Opens directly in your default browser

## 🔄 Making Future Changes

### Basic Workflow

```bash
# 1. Navigate to your project
cd /home/bhushan-arc/CV_Webpage/my-resume

# 2. Make your edits to files
# (Edit index.html, styles.css, or script.js)

# 3. Check what changed
git status

# 4. Stage your changes
git add .

# 5. Commit with a message
git commit -m "Updated experience section with new project"

# 6. Push to GitHub (auto-updates your website!)
git push origin main
```

### Common Tasks

**Add a new project**:
1. Copy a `.project-card` div in `index.html`
2. Update title, description, and tech tags
3. Save and push

**Update skills**:
1. Find `.skill-item` sections in `index.html`
2. Modify skill names and percentages
3. Save and push

**Change profile picture**:
1. Add your image to the repo
2. Update the `<img>` tag in the hero or about section
3. Save and push

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## 📦 Dependencies

- [Font Awesome 6.4.0](https://fontawesome.com/) - Icons (CDN)
- No other external dependencies!

## 🐛 Troubleshooting

### Website not updating after push?

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Check GitHub Actions tab for build status

### Icons not showing?

- Check internet connection (Font Awesome loads from CDN)
- Alternatively, download Font Awesome locally

### Contact form not working?

- The form uses `mailto:` which requires an email client
- For advanced form handling, consider services like Formspree or Netlify Forms

## 📄 License

Feel free to use this template for your own resume. Attribution appreciated but not required.

## 👤 Author

**Shashi Bhushan Jha**
- 📧 Email: bhushan.gate2022@gmail.com
- 💼 LinkedIn: [shashi-bhushan-jha-9a1922262](https://www.linkedin.com/in/shashi-bhushan-jha-9a1922262)
- 🐙 GitHub: [@ShashiBhushan22](https://github.com/ShashiBhushan22)

## 🎓 About

M.Tech in Electrical Engineering  
Indian Institute of Technology, Ropar

---

**Last Updated**: January 2026

Made with ❤️ and lots of ☕