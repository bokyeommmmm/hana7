const URL = "https://jsonplaceholder.typicode.com";

const jpfetch = (url) => fetch(url).then((res) => res.json());

const getUserInfo = (userId) => jpfetch(`${URL}/users/${userId}`);

const getPostsByUserid = (userId) => jpfetch(`${URL}/posts?userId=${userId}`);

const getUserPosts = async (userId) => {
  // const { id, name } = await getUserInfo(userId);
  // const posts = await getPostsByUserid(userId);

  const [{ id, name }, posts] = await Promise.all([
    getUserInfo(userId),
    getPostsByUserid(userId),
  ]);

  return {
    id,
    name,
    posts: posts.map(({ id, title, body }) => ({ id, title, body })),
  };
};

try {
  console.log(await getUserPosts(1));
} catch (err) {
  console.error("Error:", err);
}
