/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: `/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/**`,
      },
    ],
  },
};

export default nextConfig;
