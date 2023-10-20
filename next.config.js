/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
        API_URL: "http://localhost:3002/api/v1/",
        DEV: "production",
        API_PROD: "https://apis.sipakamaseta.com/api/v1/",
    },
};