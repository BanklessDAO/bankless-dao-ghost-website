import api from './ghost-api';
import { PostOrPage, Pagination, Tag, Author } from '@tryghost/content-api';

export interface BrowseResults<T> extends Array<T> {
  meta: {
    pagination: Pagination;
  };
}

export interface PostsOrPages extends BrowseResults<PostOrPage> {}

export async function getFeaturedPages() {
  return await api.pages
    .browse({
      limit: '3',
      filter: 'featured:true',
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPages(): Promise<any> {
  return await api.pages
    .browse({
      limit: 'all',
      formats: ['html'],
      include: ['tags', 'authors'],
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePage(slug: string): Promise<PostOrPage | null> {
  let result: PostOrPage;
  try {
    result = await api.pages.read({
      slug: slug,
    });

    if (!result) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);
    return null;
  }
  return result;
}

export async function getPagesByTag(
  slug: string,
): Promise<PostsOrPages | null> {
  let results: PostsOrPages;

  try {
    results = await api.pages.browse({
      filter: `tag.slug:${slug}`,
      include: ['tags', 'authors'],
    });

    if (!results) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);
    return null;
  }

  console.log(results);

  return results;
}
