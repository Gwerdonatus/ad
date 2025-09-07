/** next.config.js */
const nextConfig = {
  // export as static site
  output: "export",

  // if you use next/image, disable server optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: trailingSlash helps consistent paths (useful for static)
  // trailingSlash: true,
};

module.exports = nextConfig;
