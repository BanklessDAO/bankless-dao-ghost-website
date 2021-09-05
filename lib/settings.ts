import api from './ghost-api';
import { Tag, PostOrPage } from './types/ghost-types';

export async function getSettings(): Promise<any> {
  return await api.settings.browse().catch((err) => console.error(err));
}
