import api from './ghost-api';
import { PostOrPage } from './types/ghost-types';

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

export async function getPages(): Promise<PostOrPage> {
  let posts: any = await api.posts
    .browse({
      limit: "all",
      formats: ['plaintext'],
      include: ['tags', 'authors'],
    })
    .catch(err => {
      console.error(err);
    });

  return posts;
}

export async function getSinglePage(postSlug: string): Promise<any> {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}