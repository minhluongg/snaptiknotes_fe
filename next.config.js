const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: "/vi/static/contact-us",
        destination: "/static/contact-us",
        permanent: false,
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
