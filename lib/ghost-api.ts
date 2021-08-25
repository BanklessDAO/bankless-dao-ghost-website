import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL ?? '',
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY ?? '',
  version: 'v3',
});

export default api;
