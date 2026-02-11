# Certificates Folder

This folder is for storing your certificate PDF files and images.

## Expected Files

Upload your certificates with these names for automatic linking:

### IPR & Patents

- `wipo-dl101.pdf` - WIPO General Course on Intellectual Property (DL-101)
- `wipo-dl320.pdf` - WIPO Essentials of Patents (DL-320)

### Academic Documents

- `iit-enrollment.pdf` - IIT Ropar Enrollment/ID Card
- `gate-scorecard.pdf` - GATE Score Card
- `btech-degree.pdf` - B.Tech Degree Certificate
- `btech-transcript.pdf` - B.Tech Transcripts/Marksheets

### Technical Certifications

- `nptel-networks.pdf` - NPTEL Computer Networks (when completed)

## Adding More Certificates

When you earn new certificates, you can:

1. Add the PDF file to this folder
2. Update the HTML in `index.html` in the certificates section
3. Add a new certificate card following this template:

```html
<div class="certificate-card" data-category="ipr|technical|academic" data-aos="fade-up">
    <div class="cert-icon ipr|technical|academic">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="cert-content">
        <h3>Certificate Name</h3>
        <p class="cert-issuer"><i class="fas fa-university"></i> Issuing Organization</p>
        <p class="cert-date"><i class="fas fa-calendar"></i> Month Year</p>
        <p class="cert-desc">Brief description of the certificate.</p>
        <div class="cert-actions">
            <a href="certificates/filename.pdf" class="cert-btn view-btn" target="_blank">
                <i class="fas fa-eye"></i> View
            </a>
            <a href="certificates/filename.pdf" class="cert-btn download-btn" download>
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    </div>
</div>
```

## Category Types

- `ipr` - IPR and Patent related certificates (purple gradient)
- `technical` - Technical/Programming certificates (green gradient)  
- `academic` - Academic documents and degrees (orange gradient)
