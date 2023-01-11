import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

import displayCard from './modules/displayCard.js';

require('bootstrap-icons/font/bootstrap-icons.css');

const URL = 'https://api.disneyapi.dev/characters';

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  const information = data.data;
  displayCard(information);
};

getData();
