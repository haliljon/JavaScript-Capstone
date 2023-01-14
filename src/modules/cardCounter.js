const displayCount = (count) => {
  const ul = document.querySelector('#ul');
  const home = document.querySelector('#home');
  const list = document.createElement('li');
  list.innerHTML = `<a class="nav-link scrollto active" href="#hero">Number of cards in this page: ${count}</a>`;
  ul.insertBefore(list, home);
};

export default displayCount;
