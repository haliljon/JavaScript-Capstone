const displayCard = (data, div) => {
  data.forEach((set) => {
    div.innerHTML += `<div
    class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
    <div class="icon-box">
      <img class="image-container"
        src="${set.imageUrl}"
        alt="${set.name}"/>
      <h4 class="title"><a href="">${set.name}</a></h4>
      <p class="description">tvShows called ${set.tvShows}</p>
      <div class="likes"><p>${
  137 - set._id
} likes</p><i class="bx bx-heart"></i></div>
      <div class="text-center mt-3">
        <a href="#" class="comments text-center">Comments</a></div>
    </div>
  </div>`;
  });
};

export default displayCard;
