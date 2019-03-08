let ul = document.querySelector('.menu'),
    column = document.getElementById('column'),
    adv = document.querySelector('.adv');
    three = document.getElementById('three'),
    two = document.getElementById('two'),
    title = document.getElementById('title'),
    answer = document.getElementById('prompt');
    



let li = document.createElement('li'),
    // text = document.createTextNode('Мы продаем только подлинную технику Apple');
    text = document.createElement('div');
    console.log(text);


li.classList.add('menu-item');

li.innerHTML = 'Пятый пункт';
ul.appendChild(li);



column.removeChild(adv);

text.classList.add('title');

ul.insertBefore(two, three);

document.body.style.background = 'url(../img/apple_true.jpg)';
column.replaceChild(text, title);
text.innerHTML = 'Мы продаем только подлинную технику Apple';

for (let i = 0; i < 1; i++) {
  let question = prompt("Как вы относитесь к технике Apple?");
  if ((typeof (question)) === 'string' && (typeof (question)) != null && question != '') {
    answer.innerHTML = question;
  } else {
    i = i - 1;
  }
}


