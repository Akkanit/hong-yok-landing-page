# LINE OA Scam Protection Landing Page

A modern, responsive landing page for advertising your LINE Official Account scam protection service.

## Features

- ✅ Fully responsive design
- ✅ Modern gradient UI with LINE brand colors
- ✅ 4 feature cards highlighting your services:
  1. Personalized Scam Alerts
  2. Real-Time Verification
  3. Verified Intelligence
  4. Instant Action
- ✅ 3 advertisement placeholder sections (including QR code area)
- ✅ Call-to-action sections
- ✅ Professional footer
- ✅ Optimized for Vercel deployment

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Customization

### Replace Ad Placeholders

Replace the placeholder images in the "See It In Action" section:

1. Add your images to the `/public` folder
2. Update the image sections in `app/page.tsx`:

```tsx
<div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300">
  <Image 
    src="/your-image.jpg" 
    alt="Description" 
    width={400} 
    height={400}
    className="w-full h-full object-cover"
  />
</div>
```

### Add Your QR Code

For the middle ad placeholder (QR code section), replace the SVG icon with your actual QR code image:

```tsx
<Image 
  src="/qr-code.png" 
  alt="LINE OA QR Code" 
  width={300} 
  height={300}
/>
```

### Update LINE OA Link

Replace the `#add-line` href with your actual LINE OA add friend link:

```tsx
<a href="https://line.me/R/ti/p/@your-line-oa-id">
  Add LINE Official Account
</a>
```

## Project Structure

```
line-oa-landing/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/              # Static assets (add your images here)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Performance

This landing page is optimized for:
- Fast loading times
- Mobile responsiveness
- SEO (metadata included)
- Accessibility

## Support

For issues or questions, please contact your development team.

## License

Private - All rights reserved
