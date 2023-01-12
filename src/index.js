import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

import displayCard from './modules/displayCard.js';
import displayComment from './modules/displayComment';

require('bootstrap-icons/font/bootstrap-icons.css');

const URL = 'https://api.disneyapi.dev/characters';

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
    comment.addEventListener('click', () => {
      popup.style.display = 'block';
      displayComment(information[index], popup);
      // Add event listener for close popup button
      const closepopup = document.querySelector('.close-popup');
      closepopup.addEventListener('click', () => {
        popup.style.display = 'none';
        popup.innerHTML = '';
      })

    })
  })
};

document.addEventListener('DOMContentLoaded', () => {
  getData();
})
