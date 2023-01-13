function incrementLikes(id, url) {
  const likes = 0;
  console.log('test');
  fetch(`${url}/likes`)
    .then((resource) => resource.json())
    .then((data) => {
      console.log(data);
    });

  const newLikes = likes.likes + 1;
  fetch(`${url}/likes`, {
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
}

export { incrementLikes };
