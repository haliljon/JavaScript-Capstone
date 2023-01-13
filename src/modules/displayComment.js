const displayComment = async (data, popup, comments) => {
  const listOfComments = comments.length > 0 && !comments.error ? comments.map((comment) => `
  <li>${comment.creation_date}- ${comment.username}: ${comment.comment}</li>`).join('')
    : '<li>No comments found, Be the first one to comment</li>';
  const comment = `
  <div class="cross">
  <button type="button" class="btn btn-custom close-popup" style="background-color: #f6b024; color: white">
    &times;
  </button>
</div>

<div class="popup">
  <img class="popup-img" src="${data.imageUrl}" alt="disney image" />
  <h1 class="popup__title">${data.name}</h1>
  <p class="source-name">${data.tvShows}</p>
  
  <p class="comment-title">Comments</p>
  <ul class="ul-comment">
   ${listOfComments}
  </ul>
  <form class="text-center mt-3" id="send-form" method="post">
  <input type="hidden" value="${data._id}" />
  <input type="text" name="name" placeholder="Enter your name" />
  <input type="text" name="comment" placeholder="Enter your comments" />
  <br>
  <input type="submit" id="send_comment" class="comments-popup text-center"/>
</form>
</div>
  `;

  popup.innerHTML = comment;
};

export default displayComment;