/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true
    },
    images:{
        domains:['lh3.googleusercontent.com', 'images.pexels.com', 'res.cloudinary.com']
    }
}

module.exports = nextConfig
