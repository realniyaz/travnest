import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'], // Blocks system background nodes from leaking into indices
    },
    sitemap: 'https://travnest.triarchgroup.in/sitemap.xml',
  };
}