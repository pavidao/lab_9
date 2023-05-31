const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
const xhr = new XMLHttpRequest();
let close_modal = document.getElementById('close_modal');
let body = document.getElementsByTagName('body')[0];
let counter = 0;

fetch(URL)
  .then(result => result.json())
  .then(dogs => {
    dogs.forEach(element => {
      const dogDiv = document.createElement('div');
      dogDiv.classList.add('grid', 'open_modal');
      dogDiv.setAttribute('onclick', 'display(this)');
      dogDiv.setAttribute('value', counter);

      const image = document.createElement('img');
      image.src = `${Src}${element.dogImage}`;
      image.alt = 'dog';

      const textDiv = document.createElement('div');
      textDiv.classList.add('textAling');

      const title = document.createElement('h2');
      title.textContent = element.title;

      const sex = document.createElement('p');
      sex.textContent = element.sex;

      textDiv.appendChild(title);
      textDiv.appendChild(sex);

      dogDiv.appendChild(image);
      dogDiv.appendChild(textDiv);

      const main = document.querySelector('main');
      main.insertAdjacentElement('beforebegin', dogDiv);

      counter++;
    });
  })
  .catch(err => console.error(err));

function display(elm) {
  const value = elm.getAttribute('value');

  fetch(URL)
    .then(result => result.json())
    .then(dogs => {
      const dog = dogs[value];

      document.getElementById('link').src = `${Src}${dog.dogImage}`;
      document.getElementById('name').textContent = dog.title;
      document.getElementById('sex').textContent = dog.sex;
      document.getElementById('age').textContent = dog.age;
      document.getElementById('description').textContent = dog.description;

      modal.classList.add('modal_vis');
      body.classList.add('body_block');
    })
    .catch(err => console.error(err));
}

close_modal.onclick = function() {
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block');
};
