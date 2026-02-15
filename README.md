# Marwa AI - AI Consulting Website

Professional consulting service website for Marwa AI, helping companies, organizations, and schools implement and leverage AI solutions.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages
This site is configured to deploy automatically to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Setup:**
1. Push code to `main` branch
2. Enable GitHub Pages in repository settings (use GitHub Actions as source)
3. Configure your custom domain in GoDaddy (see DEPLOYMENT.md)

### Custom Domain (www.marwa-ai.us)
The site is configured for the custom domain `www.marwa-ai.us`. DNS configuration instructions are in [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎨 Features

- **Professional Design**: Modern, accessible UI with bold colors and typography
- **Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Integrated inquiry form that sends to info@marwa-ai.us
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Shadcn UI** components
- **Framer Motion** for animations
- **Vite** for build tooling

## 📁 Project Structure

```
/src
  /components
    Hero.tsx           - Landing hero section
    Services.tsx       - Services showcase
    ContactForm.tsx    - Client inquiry form
    Navigation.tsx     - Site navigation
    Footer.tsx         - Site footer
    /ui               - Shadcn components
  App.tsx             - Main app component
  index.css           - Custom styles and theme
```

## 📧 Contact Form

The contact form collects:
- Full name
- Email address
- Organization name (optional)
- Organization type
- Message/inquiry details

Form submissions open the user's email client with pre-filled information sent to **info@marwa-ai.us**.

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
