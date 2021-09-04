import api from './ghost-api';
import { PostOrPage, Pagination, Tag, Author } from '@tryghost/content-api';


export async function getFeaturedPages() {
  return await api.pages
    .browse({
      limit: "3",
      filter: "featured:true"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPages(): Promise<PostsOrPages> {
  return await api.pages
    .browse({
      limit: "all",
      formats: ['plaintext'],
      include: ['tags', 'authors'],
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePage(pageSlug: string): Promise<PostOrPage> {

  let result: PostOrPage;
  try {

    result = await api.pages.read({
      slug: pageSlug
    });

    if (!result) return null;

  } catch (error: any) {
    if(error.response?.status !== 404) throw new Error(error);
    return null;
  }
  return result;

}

export async function getPagesByTag(slug: string): Promise<PostOrPage> {

    console.log(slug);

    let results: PostOrPage[] = null;
    try {
      results = await api.pages.browse({
        filter: `tag.slug:${slug}`,
        include: ['tags', 'authors']
      });

      if(!results) return null;
    } catch (error: any) {
      if(error.response?.status !== 404) throw new Error(error);
      return null;
    }

    return results;

}