
// for the nav
let hamNav = document.querySelector('.ham--nav');
let listNav = document.querySelector('.list--nav');
let boxNav = document.querySelector('.box--nav');
let overlay = document.querySelector('.overlay');
boxNav.addEventListener("click", function(){
    listNav.classList.toggle('is--active');
    hamNav.classList.toggle('is--active');
    overlay.classList.toggle('is--hidden');
})