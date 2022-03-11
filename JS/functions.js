
const menuBtn = document.querySelector('.hamburguer');
const asiderMenuBar = document.querySelector('.asider-bar');

if(window.innerWidth < 1023) {
    menuBtn.addEventListener('click',function () {
        menuBtn.classList.toggle("is-active");
        asiderMenuBar.classList.toggle('is-active');
    });
}

const collapseBtn = document.querySelector('.collapse');
const span = document.querySelector('.mv-1');
const cardHeight = document.querySelector('.card');

collapseBtn.addEventListener('click',function () {
    span.classList.toggle('is-active');
    cardHeight.classList.toggle('is-active');
});