import api from './ghost-api';

export async function getFeaturedPages() {
    return await api.pages
      .browse({
        limit: "4",
        filter: "featured:true"
      })
      .catch(err => {
        console.error(err);
      });
  }

// export async function getPages() {
//     return await api.posts
//       .browse({
//         limit: "all",
//         formats: ['plaintext'],
//         include: ['tags','authors'],
//         filter: 
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }

// export async function getSinglePost(postSlug: string) {
//   return await api.posts
//     .read({
//       slug: postSlug
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }