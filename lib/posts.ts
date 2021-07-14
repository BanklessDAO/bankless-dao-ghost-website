import api from './ghost-api';

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "5",
        formats: ['plaintext'],
        include: ['tags','authors']
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getSinglePost(postSlug: string) {
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