const text = document.querySelector('.info__description-container');
const button = document.querySelector('.info__button');

button.onclick = function () {
  if (text.classList.contains('visually-hidden')) {
    text.classList.remove('visually-hidden');
    button.innerHTML = 'Свернуть';
  } else {
    text.classList.toggle('visually-hidden');
    button.innerHTML = 'Подробнее';
  }
};
