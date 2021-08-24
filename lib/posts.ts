import api from './ghost-api';
import { Tag, PostOrPage } from './types/ghost-types';

export async function getPosts(): Promise<any> {
  return await api.posts
    .browse({
      limit: 5,
      formats: ['plaintext'],
      include: ['tags', 'authors'],
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPaginatedPosts(page: number = 1): Promise<any> {
  return await api.posts
    .browse({
      limit: 5,
      page,
      formats: ['plaintext'],
      include: ['tags', 'authors'],
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

// I am so violating DRY here.
export async function getOlderPost(date: string): Promise<any> {
  return await api.posts
    .browse({
      limit: "1",
      filter: `published_at:<'${date}'`,
      fields: ['id', 'title', 'feature_image', 'feature_image_alt', 'slug']
    })
    .catch(err => console.error(err));
}

export async function getNewerPost(date: string): Promise<any> {
  return await api.posts
    .browse({
      limit: "1",
      filter: `published_at:>'${date}'`,
      fields: ['id', 'title', 'feature_image', 'feature_image_alt', 'slug']
    })
    .catch(err => console.error(err));
}