const displayComment = (data, popup) => {
  const comment = `
  <div class="cross">
  <button type="button" class="btn btn-custom close-popup" style="background-color: #f6b024; color: white">
    &times;
  </button>
</div>

<div class="popup">
  <img class="popup-img" src="${data.imageUrl}" alt="disney image" />
  <h1 class="popup__title">Disney Character</h1>
  <p class="source-name">Movie/TV Title: ${data.name}</p>
  <p>Comments</p>
  <ul class="ul-comment">
    <li>01/11/2023- Anna: This movie looks good</li>
    <li>01/11/2023- Anna: This movie looks good</li>
    <li>01/11/2023- Anna: This movie looks good</li>
    <li>01/11/2023- Anna: This movie looks good</li>
    <li>01/11/2023- Anna: This movie looks good</li>
  </ul>
  <input type="text" placeholder="Enter your name" />
  <input type="text" placeholder="Enter your comments" />
<div class="text-center mt-3">
  <a href="#" class="comments-popup text-center">Comments</a>
</div>
</div>
  `;
  
  popup.innerHTML = comment;
};

export default displayComment;