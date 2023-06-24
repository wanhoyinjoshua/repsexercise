const { i18n } = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: ['lh3.googleusercontent.com',"s.gravatar.com","anythinpocketimage.s3.ap-southeast-2.amazonaws.com"],
  },
  i18n,
};

const withPWA = require('next-pwa')({
  dest: 'public',
  
  skipWaiting: true,
  register: true,
});

module.exports = withPWA(nextConfig);