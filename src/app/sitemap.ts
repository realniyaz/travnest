import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://travnest.triarchgroup.in';

  // Core routing index definitions
  const routes = [
    '',
    '/about',
    '/disclaimer',
    '/privacy',
    '/terms',
    '/booking-policy',
    '/dispute-resolution',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}