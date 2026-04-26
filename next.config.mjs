/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your image domain
        port: '',
      },
  
    ],
  },
};

export default nextConfig;
