let ul = document.querySelector('.menu'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');
    title = document.getElementById('title'),
    answer = document.getElementById('prompt'),
    menuItem = document.querySelectorAll('.menu-item');
    

console.log(column);

let li = document.createElement('li'),
    // text = document.createTextNode('Мы продаем только подлинную технику Apple');
    text = document.createElement('div');
    console.log(text);


li.classList.add('menu-item');

li.innerHTML = 'Пятый пункт';
ul.appendChild(li);



column[1].removeChild(adv);

text.classList.add('title');

ul.insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
// column[1].replaceChild(text, title);
title.textContent = 'Мы продаем только подлинную технику Apple';

for (let i = 0; i < 1; i++) {
  let question = prompt("Как вы относитесь к технике Apple?");
  if ((typeof (question)) === 'string' && (typeof (question)) != null && question != '') {
    answer.innerHTML = question;
  } else {
    i = i - 1;
  }
}


