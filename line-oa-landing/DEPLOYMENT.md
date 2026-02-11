# Quick Deployment Guide for Vercel

## Prerequisites
- A GitHub account
- A Vercel account (free tier available at vercel.com)

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - LINE OA landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Select your repository from the list
5. Click "Import"
6. Vercel will auto-detect Next.js - no configuration needed
7. Click "Deploy"

🎉 Your site will be live in ~2 minutes!

## Custom Domain (Optional)

After deployment:
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables (If needed)

If you need to add environment variables:
1. Go to project "Settings" → "Environment Variables"
2. Add your variables
3. Redeploy

## Updating Your Site

Every time you push to your GitHub repository's main branch:
- Vercel will automatically rebuild and redeploy
- Changes go live in ~1-2 minutes

## Quick Updates Without Git

For quick content changes:
1. Edit files directly on GitHub
2. Commit changes
3. Vercel auto-deploys

## Troubleshooting

### Build fails?
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Make sure there are no TypeScript errors

### Need help?
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

## Performance Tips

Your landing page is already optimized with:
- Static site generation
- Automatic image optimization
- Edge network deployment
- Zero configuration needed

Average load time: < 1 second globally!
