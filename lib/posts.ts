import api from './ghost-api';
import { Tag, PostOrPage } from './types/ghost-types';

export async function getPosts(): Promise<any> {
  return await api.posts
    .browse({
      limit: 5,
      formats: ['plaintext'],
      include: ['tags', 'authors']
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string): Promise<any> {
  return await api.posts
    .read({
      slug: postSlug,
    }, {
      include: ['tags', 'authors']
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPostsWithTag(parentTags: string[]): Promise<any> {

  let fixed = parentTags.map((tag: string) => tag.replace(/ /g, "-"));

  return await api.posts
    .browse({
      limit: 4,
      include: ['authors'],
      fields: ['id', 'title', 'slug'],
      filter: `tags:[${fixed}]`
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getFeaturedPosts(): Promise<any> {
  return await api.posts
    .browse({
      limit: "3",
      filter: "featured:true",
      include: ['authors']
    })
    .catch(err => {
      console.error(err);
    });
}