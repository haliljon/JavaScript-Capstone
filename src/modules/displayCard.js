const displayCard = (data, div, likes) => {
  const arr1 = [];
  let itemCount = 0;
  data.every((set) => {
    if (set._id > 36) {
      return false;
    }
    if (
      set._id === 14 ||
      set._id === 16 ||
      set._id === 18 ||
      set._id === 24 ||
      set._id === 31 ||
      set._id === 34
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
    itemCount += 1;
    let likeS = 0;
    for (let i = 1; i < likes.length; i += 1) {
      if (likes[i].item_id === set._id) {
        likeS = likes[i].likes;
      }
    }

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
  return itemCount;
};

export default displayCard;
