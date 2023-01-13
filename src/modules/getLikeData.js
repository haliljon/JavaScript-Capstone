const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/f9a0uWRwRqUh4EVjZ7AB';

const likeGetData = async (id) => {
  const response = await fetch(`${url}/likes`);
  const likeArr1 = await response.json();
  const likeArr = likeArr1;
  return likeArr;
};

export { likeGetData };
