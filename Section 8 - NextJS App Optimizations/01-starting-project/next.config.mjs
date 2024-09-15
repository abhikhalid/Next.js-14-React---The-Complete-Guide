/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            //allows external side to load image
            hostname:'res.cloudinary.com'
        }]
    }
};

export default nextConfig;
