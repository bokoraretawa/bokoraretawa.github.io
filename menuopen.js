const btn = document.querySelector('.menubutton');
const nav = document.querySelector('nav');
console.log(btn) 

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
});