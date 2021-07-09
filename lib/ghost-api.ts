import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_INTEGRATION_KEY,
    version: process.env.GHOST_VERSION
});


export default api; 