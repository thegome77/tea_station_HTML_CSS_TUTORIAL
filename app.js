//setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
