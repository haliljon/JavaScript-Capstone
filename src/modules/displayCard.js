const displayCard = (data, div, likes) => {
  const listOfLikes = likes.length > 0 && !likes.error
    ? likes
      .map(
        (like) => `<div class="like-section">
            <span class="likesSpan">${like.likes} likes         </span>
            <button class="like-button">♥️</button>
          </div>`,
      )
      .join('')
    : `<div class="like-section">
          <span class="likesSpan">0 likes       </span>
          <button class="like-button">♥️</button>
        </div>`;

  const arr1 = [];
  const index = -1;
  data.every((set) => {
    if (set._id > 31) {
      return false;
    }
    if (
      set._id === 14
      || set._id === 16
      || set._id === 18
      || set._id === 24
      || set._id === 31
      || set._id === 34
    ) {
      [set.tvShows] = set.films;
    } else if (set._id === 13 || set._id === 23) {
      set.tvShows = set.videoGames;
    } else if (set._id === 11) {
      set.tvShows = set.parkAttractions;
    } else if (set._id === 6) {
      set.tvShows = set.name;
    }
    arr1.push(set._id);

    let likeS = 0;
    for (let i = 1; i < likes.length; i++) {
      if (likes[i].item_id === set._id) {
        likeS = likes[i].likes;
      }
    }
    console.log(likeS);
    div.innerHTML += `<div
    class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
    <div class="icon-box">
      <img class="image-container"
        src="${set.imageUrl}"
        alt="${set.name}"/>
      <h4 class="title"><a href="">${set.name}</a></h4>
      <p class="description">${set.tvShows}</p>
      <div class="like-section">
          <span class="likesSpan">${likeS} likes       </span>
          <button class="like-button">♥️</button>
        </div>
      <div class="text-center mt-3">
        <a href="#" class="comments text-center">Comments</a></div>
    </div>
  </div>`;

    return true;
  });
  return arr1;
};

export default displayCard;
