# NEXUS | Srinath's Cosmic Portfolio 🚀

A stunning, interactive personal portfolio website showcasing projects, skills, and experience with cutting-edge web technologies and eye-catching animations.

## ✨ Features

### 🎨 **Visual Excellence**
- **Glassmorphism Design** - Modern frosted glass UI elements
- **Gradient Animations** - Smooth, vibrant color transitions
- **Custom Cursor** - Interactive cursor that responds to user movement
- **Neon Text Effects** - Glowing cyan and purple typography
- **Canvas Animations** - Dynamic hero section with particle effects

### 🎬 **Interactive Elements**
- **Rocket Preloader** - Engaging animated loading screen
- **Scroll Progress Bar** - Visual indicator of page progress
- **Smooth Scrolling** - Elegant navigation between sections
- **Skill Card Animations** - Interactive skill proficiency displays
- **Project Filtering** - Filter projects by category (UI/UX, Web, Interactive)
- **Modal Project Viewer** - Detailed project information pop-ups

### 📧 **Contact Integration**
- **EmailJS Integration** - Direct email messaging from the contact form
- Real-time form validation
- Responsive contact section

### 📱 **Responsive Design**
- Mobile-optimized hamburger menu
- Fully responsive across all device sizes
- Touch-friendly interactive elements

### 📊 **Visitor Analytics**
- Dynamic visitor counter
- Professional statistics display

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with animations
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Interactive features and animations
- **Canvas API** - Hero section particle effects

### Integrations
- **EmailJS** - Email service for contact form
- **Font Awesome** - Icon library (v6.5.1)
- **Google Drive** - Resume hosting and download

### Architecture
- Mobile-first responsive design
- Modular component-based structure
- Smooth scroll behavior
- Glass morphism UI patterns

## 📁 Project Structure

```
Personal_Portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Custom styles and animations
├── script.js           # JavaScript functionality and interactions
├── README.md           # This file
└── assets/
    └── images/
        └── PROFILE.png # Profile picture (4:5 aspect ratio)
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd Personal_Portfolio
   ```

2. **Open in Browser**
   - Simply double-click `index.html` or
   - Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (using http-server)
   npx http-server
   ```

3. **Access the Portfolio**
   - Open `http://localhost:8000` in your browser

## 📋 Content Sections

### 1. **Navigation (Navbar)**
- Logo with cosmic icon
- Smooth scroll links to all sections
- Resume download button
- Mobile hamburger menu

### 2. **Hero Section**
- Animated canvas background
- Portfolio title with gradient
- Visitor counter
- Call-to-action buttons
- Scroll indicator

### 3. **About Section**
- Profile image with gradient background
- Location display
- Professional summary
- Key statistics (projects, hackathons, lines of code)

### 4. **Skills Section**
- 4 featured skills with proficiency levels:
  - **HTML5** - 95% proficiency
  - **CSS3 + Tailwind** - 92% proficiency
  - **JavaScript** - 88% proficiency
  - **React / Next.js** - 85% proficiency
- Animated progress bars
- Additional technologies mentioned

### 5. **Projects Section**
- Filterable project grid
- Filter categories: All, UI/UX, Web, Interactive
- Project cards with images and descriptions
- Modal pop-ups with detailed information
- Links to GitHub and live demos

### 6. **Contact Section**
- Email contact form
- Fields: Name, Email, Message
- EmailJS integration for direct email submission
- Responsive form layout

### 7. **Footer**
- Social media links (GitHub, LinkedIn)
- Copyright information
- Motivational tagline

## ⚙️ Configuration

### EmailJS Setup
To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS credentials in `script.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams);
   ```

### Resume Link
Update the Google Drive link in the navbar:
```html
<a href="https://your-resume-url" download="Your_Name_Resume.pdf">
```

### Visitor Counter
The counter can be connected to a backend service or local storage for persistence.

## 🎨 Customization

### Colors
Modify the color scheme in `index.html` and `style.css`:
- Primary: Cyan (#06B6D4)
- Secondary: Purple (#A855F7)
- Background: Black (#000000)

### Fonts
Currently uses system fonts via Tailwind CSS. To add custom fonts:
1. Import from Google Fonts in `index.html` `<head>`
2. Update `font-family` in `style.css`

### Projects Data
Edit the projects grid in `script.js` to update:
- Project titles, descriptions, and images
- GitHub and live demo links
- Project categories and tags

### Social Links
Update footer social links with your profiles:
- GitHub
- LinkedIn

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Mobile browsers supported with responsive design

## 📱 Performance Optimization

- Minified CSS and JavaScript for production
- Canvas animation optimizations
- Lazy loading for images (recommended for deployment)
- CSS animations use GPU acceleration

## 🔒 Security Considerations

- Contact form is protected via EmailJS
- No sensitive data stored locally
- All external resources from trusted CDNs

## 📚 Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- **EmailJS**: `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`

### Local Files
- `style.css` - Custom styles
- `script.js` - JavaScript functionality

## 🚢 Deployment

### Deploy to Popular Platforms

#### **GitHub Pages**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Then enable GitHub Pages in repository settings.

#### **Netlify**
1. Connect GitHub repository
2. Build command: (leave empty for static site)
3. Publish directory: `/`

#### **Vercel**
Similar to Netlify, connect your GitHub repo and deploy.

#### **Traditional Hosting**
Upload all files to your web server via FTP/SFTP.

## 🐛 Troubleshooting

### Canvas animations not showing
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify canvas support in your browser

### EmailJS not working
- Verify EmailJS credentials in `script.js`
- Check spam folder for test emails
- Ensure form fields have required attributes

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Verify Tailwind CDN is loading
- Check for CSS conflicts in developer tools

## 📖 Learning Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📝 License

This project is created for **Student Hackathon 2026**. Feel free to use and modify for your personal portfolio.

## 👤 Author

**Srinath G.**
- 📍 Hyderabad, India
- 🔗 [GitHub](https://github.com/Srinath-69)
- 💼 [LinkedIn](https://www.linkedin.com/in/srinath261)

## 🎯 Project Goals

- Demonstrate advanced frontend development skills
- Showcase interactive design and animations
- Create an engaging user experience
- Build a professional digital presence

## 📞 Support

For questions or issues, please:
1. Check the troubleshooting section
2. Review the code comments
3. Open an issue on GitHub

---

**Made different. Made to win. 🚀**

Built for Student Hackathon 2026 • Scholar IT Solutions
