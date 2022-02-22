let openMenuBtn = document.getElementById('id-menu');
let navBox = document.getElementById('id-navbox');
let closeMenu = document.getElementById('id-navclose');
let body = document.getElementById('body');


openMenuBtn.addEventListener('click', function () {
  navBox.classList.add('open-nav');
  body.classList.add('open-left');
})

closeMenu.addEventListener('click', function () {
  navBox.classList.remove('open-nav');
  body.classList.remove('open-left');
})


let openSetingsBtn = document.getElementById('id-menu');
let boxsetings = document.getElementById('id-setbox');
let closeSetings = document.getElementById('id-navclose');

openSetingsBtn.addEventListener('click', function () {
  boxsetings.classList.add('open-settings');

})

closeMenu.addEventListener('click', function () {
  boxsetings.classList.remove('open-settings');
})



let open = document.getElementById('id-setings');
let navbox = document.getElementById('id-setbox');
let icon = document.getElementById('id-setclose');

let count = 0;
open.addEventListener('click', function () {
  navbox.classList.toggle('open-settings');
  if (count == 0) {
    icon.style.fontSize = '32px';
    icon.className = "bx bx-x";
    icon.style.color= '#fff'
    count++;
  } else {
    icon.className = "bx bx-cog";
    icon.style.color= '#fff'
    count = 0;
  }
})