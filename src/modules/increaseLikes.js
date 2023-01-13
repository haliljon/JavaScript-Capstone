const incrementLikes = async (id, url) => {
  const likes = 0;
  fetch(`${url}/likes`)
    .then((resource) => resource.json())
    .then((data) => {
      console.log(data);
    });
  const newLikes = likes + 1;

  await fetch(`${url}/likes`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      likes: newLikes,
    }),
  });
  const likesText = `${newLikes} likes`;
  return likesText;
};

export default incrementLikes;
