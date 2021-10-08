import { PostOrPage } from '@tryghost/content-api';
import api from './ghost-api';
import { PostsOrPages } from './pages';

export function urlForPost(post: PostOrPage): string {
  return `/${post.slug}`;
}

export async function getPosts(): Promise<any> {
  return await api.posts
    .browse({
      limit: 5,
      formats: ['html'],
      include: ['tags', 'authors'],
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPaginatedPosts(page: number = 1): Promise<any> {
  return await api.posts
    .browse({
      limit: 5,
      page,
      formats: ['html'],
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
      page: nextPage,
      formats: ['html'],
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

export async function getSinglePost(postSlug: any): Promise<any> {
  let result: PostOrPage;
  try {
    result = await api.posts.read(
      {
        slug: postSlug,
      },
      {
        include: ['tags', 'authors'],
      },
    );

    if (!result) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);
    return null;
  }

  return result;
}

export async function getPostsWithTag(parentTags: string[]): Promise<any> {
  let fixed = parentTags.map(({ name }: any) => name.replace(/ /g, '-'));
  let result: PostOrPage[];

  try {
    result = await api.posts.browse({
      limit: 4,
      include: ['authors'],
      fields: ['id', 'title', 'slug'],
      filter: `tags:[${fixed}]`,
    });

    if (!result) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);

    return null;
  }

  return result;
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

export async function getPaginatedPostsByTag(
  tag: string,
  page: number = 1,
): Promise<any> {
  let results;

  try {
    results = await api.posts.browse({
      limit: 5,
      page,
      formats: ['html'],
      filter: `tag:${tag}`,
      include: ['tags', 'authors'],
    });

    if (!results) return null;
  } catch (error: any) {
    if (error.response?.status !== 404) throw new Error(error);

    return null;
  }

  return results;
}
