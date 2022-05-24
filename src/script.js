console.log('start of script');
var menu = document.querySelector('[data-menu]');
var closeBtn = document.querySelector('[data-closeBtn]');
var nav = document.querySelector('[data-nav]');
console.log(menu, closeBtn);
menu.addEventListener('click', function () {
    nav.classList.add('open');
});
closeBtn.addEventListener('click', function () {
    nav.classList.remove('open');
});
console.log('end of script');
