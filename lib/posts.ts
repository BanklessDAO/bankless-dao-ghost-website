import { PostOrPage } from '@tryghost/content-api';
import api from './ghost-api';

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
    .catch((err) => {
      console.error(err);
    });
}

// fetch posts and follow pagination to fetch every post
export async function getAllPosts() {
  let results: PostOrPage[] = [];
  let keepGoing = true;
  let nextPage = 1;
  // fetch all results
  while (keepGoing) {
    let nextResults = await api.posts.browse({
      limit: 2,
      page: nextPage,
      formats: ['plaintext'],
      include: ['tags', 'authors'],
    });

    results = [...results, ...nextResults];

    if (nextResults.meta.pagination.next) {
      nextPage = nextResults.meta.pagination.next;
    } else {
      keepGoing = false;
    }
  }
  return results;
}

export async function getSinglePost(postSlug: string): Promise<any> {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      {
        include: ['tags', 'authors'],
      },
    )
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsWithTag(parentTags: string[]): Promise<any> {
  let fixed = parentTags.map((tag: string) => tag.replace(/ /g, '-'));

  return await api.posts
    .browse({
      limit: 4,
      include: ['authors'],
      fields: ['id', 'title', 'slug'],
      filter: `tags:[${fixed}]`,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPosts(): Promise<any> {
  return await api.posts
    .browse({
      limit: '3',
      filter: 'featured:true',
      include: ['authors'],
    })
    .catch((err) => {
      console.error(err);
    });
}

// I am so violating DRY here.
export async function getOlderPost(date: string): Promise<any> {
  return await api.posts
    .browse({
      limit: '1',
      filter: `published_at:<'${date}'`,
      fields: ['id', 'title', 'feature_image', 'feature_image_alt', 'slug'],
    })
    .catch((err) => console.error(err));
}

export async function getNewerPost(date: string): Promise<any> {
  return await api.posts
    .browse({
      limit: '1',
      filter: `published_at:>'${date}'`,
      fields: ['id', 'title', 'feature_image', 'feature_image_alt', 'slug'],
    })
    .catch((err) => console.error(err));
}
