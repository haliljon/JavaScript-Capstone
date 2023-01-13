import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

import displayCard from './modules/displayCard.js';
import displayComment from './modules/displayComment.js';
import InvolvementAPI from './modules/API';

require('bootstrap-icons/font/bootstrap-icons.css');

const URL = 'https://api.disneyapi.dev/characters';

const renderComment = async (information, index, popup) => {
  const comments = await InvolvementAPI.getComments(information[index]._id);
  await displayComment(information[index], popup, comments);
  // Add event listener for close popup button
  const closepopup = document.querySelector('.close-popup');
  closepopup.addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
  // Add event listener for send comment
  const form = document.querySelector('#send-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { elements } = form;
    const id = elements[0].value;
    const name = elements[1].value;
    const comment = elements[2].value;
    await InvolvementAPI.sendComment(id, name, comment);
    form.reset();
    await renderComment(information, index, popup);
  });
};

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  const information = data.data;
  const divRow = document.querySelector('.row');
  const popup = document.querySelector('.popup__container');
  displayCard(information, divRow);
  // Select list of comment buttons after getting rendered by displayCard
  const commentBtn = document.querySelectorAll('.comments');
  commentBtn.forEach((comment, index) => {
    comment.addEventListener('click', async () => {
      popup.style.display = 'block';
      await renderComment(information, index, popup);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getData();
});
