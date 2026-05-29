/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables smooth animations and faster builds
  reactStrictMode: true,
  
  // Ensures images (like your studio logo) load without a custom server
  images: {
    unoptimized: true,
  },
  
  // This helps Netlify handle the static parts of your futuristic UI
  output: 'standalone', 
};

module.exports = nextConfig;
