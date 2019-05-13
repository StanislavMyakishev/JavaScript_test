let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    newItem = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    prom = document.querySelector('.prompt');
newItem.classList.add('menu-item');
newItem.innerHTML = 'Пятый пункт';
menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';
menu.appendChild(newItem);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();
let feedback = prompt("Какое отношение у Вас к технике Apple?", "");
prom.textContent = feedback;