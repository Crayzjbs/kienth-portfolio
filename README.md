# Portfolio Website

A modern, responsive one-page portfolio website built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern, clean design inspired by professional portfolios
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🚀 Easy to deploy

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit `app/page.tsx` to replace placeholder content with your actual information:

- **Hero Section**: Update your name, location, title, and achievement badge
- **About Section**: Write your bio and professional background
- **Tech Stack**: Add your technologies and skills
- **Projects**: Add your actual projects with descriptions and links
- **Certifications**: List your certifications and credentials
- **Recommendations**: Add testimonials from colleagues or clients

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Other SEO metadata

### Styling

The project uses TailwindCSS. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component styles directly in `app/page.tsx`

## Deployment

### Deploy to Netlify (Recommended)

This project is configured for easy deployment to Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will auto-detect Next.js and deploy

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

The project is configured with `output: 'export'` for static export:

```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main portfolio page
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
