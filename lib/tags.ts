import { Tag } from '@tryghost/content-api';
import api from './ghost-api';
import { BrowseResults } from './pages';

export interface Tags extends BrowseResults<Tag> {}

export function urlForTag(tag: Tag): string {
  return `/tag/${tag.slug}`;
}

export async function getAllTags(): Promise<Tag[] | null> {
  let results: Tag[] = [];

  let keepGoing = true;
  let nextPage = 1;

  try {
    // fetch all results
    while (keepGoing) {
      let nextResults = await api.tags.browse({
        page: nextPage,
        include: ['count.posts'],
        order: ['count.posts ASC'],
      });

      results = [...results, ...nextResults];

      if (nextResults.meta.pagination.next) {
        nextPage = nextResults.meta.pagination.next;
      } else {
        keepGoing = false;
      }
    }
    if (!results) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);

    return null;
  }

  return results;
}

export async function getTagBySlug(tagSlug: string): Promise<Tag | null> {
  let result: Tag;

  try {
    result = await api.tags.read(
      {
        slug: tagSlug,
      },
      {
        include: ['count.posts'],
      },
    );

    if (!result) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);
    return null;
  }

  return result;
}
