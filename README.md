# Walk Away: Ireland

A one-page educational website highlighting the devastating impact of one-punch attacks in Ireland, designed to promote violence prevention and awareness.

## Overview

This single-page website features:

- **Awareness messaging** – A strong, clear message about the consequences of one-punch violence
- **Video embed** – Homepage video player with Facebook embed and text-link fallback
- **Impact stories** – Anonymized case studies showing the human cost (family losses, survivor trauma)
- **Statistics** – Source-backed facts and research findings on one-punch attacks
- **Prevention guidance** – Practical steps to avoid violence and help others
- **Resources** – Support hotlines and reporting information
- **Full attribution** – Transparent source linking and expert credits

## Content Sources

All claims and statistics are sourced from:
- **RTE Prime Time**: "Fatal Blows: The Devastating Impact of One-Punch Attacks" (June 18, 2024)
- **BreakingNews.ie**: Court reports on one-punch manslaughter cases (2023–2026)
- **Documentary**: Associated video report on Facebook
- **Expert analysis**: Medical professionals and forensic research (Australian & Irish)

## File Structure

```
WalkAway.ie/
├── index.html          # Main single-page website
├── styles.css          # Responsive, accessible CSS
├── main.js             # Smooth scroll & video fallback handling
├── assets/             # Placeholder for future images/icons
├── .github/
│   └── copilot-instructions.md   # VS Code Copilot customization (if used)
└── README.md           # This file
```

## Key Features

### 1. Responsive Design
- Mobile-first approach (320px and up)
- Fully responsive on tablets and desktop
- Accessible color contrast (WCAG AA standard)
- Semantic HTML5 structure

### 2. Accessibility
- Keyboard navigation support (Tab, Enter, Arrow keys)
- Focus visible indicators on all interactive elements
- Semantic heading hierarchy (H1 → H6)
- Descriptive link text and alt attributes
- Support for reduced motion preferences

### 3. Video Integration
- Primary: Facebook video embed (responsive iframe)
- Fallback: Text link to Facebook watch page
- Auto-detection of embed failures
- 5-second timeout for fallback display

### 4. Performance
- No external frameworks (vanilla HTML/CSS/JS)
- Lightweight and fast loading
- Optimized for low-bandwidth connections
- Print-friendly styles included

## How to Use

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in a web browser (no build step required)
   - Option 1: Double-click `index.html`
   - Option 2: Drag `index.html` into your browser
   - Option 3: Use a local server (see below)
3. **Navigate** using the sticky header menu or scroll through sections
4. **Test on mobile** by resizing the browser or using developer tools (F12 → Toggle Device Toolbar)

### Local Server (Recommended)

To avoid potential issues with cross-origin embeds, use a local HTTP server:

#### Using Python (built-in):
```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Using Node.js:
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run from project directory
http-server

# Then visit: http://localhost:8080
```

#### Using VS Code Live Server:
1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Deployment

1. Upload all files to your web server
2. Ensure HTTPS is enabled for security
3. Test the video embed on the live domain (Facebook may restrict to certain origins)
4. Verify accessibility with tools like:
   - Chrome DevTools Lighthouse
   - WAVE Browser Extension
   - Axe DevTools

## Customization

### Editing Content

- **Hero message**: Edit `<h2>` and `<p>` in `.hero` section (index.html)
- **Stories**: Modify `.story-card` content (ensure anonymity)
- **Statistics**: Update `.stat-card` sections with new facts
- **Color scheme**: Edit CSS variables in `styles.css` under `:root`
- **Navigation links**: Update `.nav-links` in header

### Styling

All colors, spacing, and typography are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --color-primary: #8B0000;      /* Deep red */
    --color-secondary: #DC143C;    /* Crimson */
    --font-size-base: 16px;
    /* ... more variables ... */
}
```

Modify these to match your branding or design preferences.

### Adding Sections

1. Create a new `<section class="container">` in `index.html`
2. Add the section to `.nav-links` for navigation
3. Write styles in `styles.css` for the new section class
4. Test on mobile and desktop

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)
- ⚠️ IE11: Not supported (use Edge instead)

## Video Embed Details

### Facebook Video Embed

The site uses Facebook's embedded video player. If the embed does not display:

1. **Check domain allowlist**: Facebook may restrict embeds to authorized domains
2. **Use HTTPS**: Facebook requires secure connections
3. **Check origin settings**: Verify browser security policies aren't blocking iframes

### Fallback

If the embed fails, a text link is automatically shown:
```
"Watch the report on Facebook"
```

This link always functions, even if the iframe embed is blocked.

## Accessibility Notes

### Keyboard Navigation
- Press `Tab` to navigate all links and buttons
- Press `Enter` to activate buttons
- Press `Space` to scroll down
- Use `Ctrl+Home` / `Ctrl+End` to jump to page start/end

### Screen Readers
- All sections have semantic headings
- Images have descriptive alt text (if added)
- Links use descriptive text (e.g., "Watch on Facebook" not "Click here")
- Form labels are properly associated

### Color Contrast
- All text meets WCAG AA standard (4.5:1 for normal text)
- Deep red (#8B0000) on white is fully accessible
- Accent colors (gold) used only for interactive elements

## Performance Optimization

### Load Time
- Average page load: < 1 second (no dependencies)
- Total page size: ~50–80 KB
- No JavaScript libraries required

### Future Optimizations
- Add image optimization (WebP format, lazy loading)
- Minify CSS and JavaScript for production
- Use a CDN for global delivery
- Add service worker for offline support (PWA)

## Legal & Attribution

### Content Rights

- All case information comes from **published news reports** and **public court records**
- Stories are **anonymized** to protect victim privacy
- No full-text articles are copied; all content is **paraphrased**
- All sources are **clearly credited** with links

### Usage Rights

This website is intended as an **educational resource**. It may be shared, adapted, or reused for:
- Violence prevention awareness campaigns
- Educational institutions
- Community organizations
- Government health initiatives

**Attribution is required**: Please link back to this site or credit the original RTE and BreakingNews.ie sources.

### Liability

This site provides **general information** and does not replace professional medical, legal, or mental health advice. If you or someone you know has been harmed by violence, contact:
- **Emergency**: Call 999
- **Garda Confidential**: 1800 666 111
- **Mental Health Support**: Samaritans 116 123

## Support & Feedback

For questions, corrections, or suggestions:
1. Review the sources listed in the **Sources & Attribution** section on the website
2. Verify facts against original RTE Prime Time and BreakingNews.ie articles
3. Contact local violence prevention organizations in Ireland

## Technical Stack

- **HTML5**: Semantic markup, no frameworks
- **CSS3**: Responsive grid/flexbox, CSS variables, media queries
- **JavaScript**: Vanilla ES6+, no dependencies
- **Video**: Facebook iframe embed with fallback
- **Hosting**: Static HTML (any web server)

## Version History

- **v1.0** (May 2026): Initial launch with full content, responsive design, accessibility compliance
  - Hero section with CTA
  - Video embed with fallback
  - 3 anonymized impact stories
  - 8 statistics with source attribution
  - 6 prevention guidance cards
  - 4 resource/help cards
  - Full sources & references
  - Mobile & desktop responsive
  - Keyboard navigation & screen reader support

## License

This site is provided as an **educational resource for violence prevention**. Use, modify, and share as needed for public health and awareness purposes. Attribution to original sources (RTE, BreakingNews.ie) is required.

---

**Last Updated**: May 2026  
**Creator**: Walk Away Initiative  
**Focus**: Violence prevention, victim support, and community education in Ireland
