# React Final Project

A React application built with Vite and deployed to GitHub Pages.

## Features

- React 18 with modern hooks
- React Router for navigation
- Chakra UI for styling
- Event management system
- Responsive design

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages:

- The app is built with the correct base path for GitHub Pages
- GitHub Actions workflow automatically deploys on push to main branch
- Deployed site: `https://ehsandc.github.io/React-Final-Project/`

### Manual Deployment

If you need to deploy manually:

1. Make sure your repository has GitHub Pages enabled
2. Build the project: `npm run build`
3. The built files in `dist/` folder are ready for deployment

## Configuration

- **Base Path**: The app is configured to work with GitHub Pages subpath (`/React-Final-Project/`)
- **Router**: Uses React Router with proper basename configuration
- **Assets**: All assets paths are configured for GitHub Pages deployment