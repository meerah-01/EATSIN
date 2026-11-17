const navbar = document.querySelector('.navbar');
const side = document.querySelector('.sidebar')
const hamburger = document.querySelector('.fa-bars');
const exit = document.querySelector('.exit')
console.log(side);
console.log(hamburger);

hamburger.addEventListener('click', () => {
  side.classList.toggle('active')
   console.log(side.classList);
})
exit.addEventListener('click', () => {
  side.classList.remove('active');
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }

  lastScrollY = window.scrollY;
});


