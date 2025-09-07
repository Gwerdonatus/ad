/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ enables static site export
  images: {
    unoptimized: true, // ✅ required for static export if using next/image
  },
  // trailingSlash: true, // optional
};

export default nextConfig;
