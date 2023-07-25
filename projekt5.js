const menuOpen = document.querySelector('.fa-bars');
const burger = document.querySelector('.burger')
const menuClose = document.querySelector('.fa-times');
const ul = document.querySelector('nav ul');

const open = () => {
    ul.classList.add('active');
}

burger.addEventListener('click',open)
window.addEventListener('click', function(e){
    if ((!ul.contains(e.target)) && (!burger.contains(e.target))){
        ul.classList.remove('active');
  } 
})