console.log('start of script');

const menu = document.querySelector('[data-menu]');
const closeBtn = document.querySelector('[data-closeBtn]');
const nav = document.querySelector('[data-nav]');
console.log(menu, closeBtn)




menu.addEventListener('click', () => {
    nav.classList.add('open');
})


closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
})





console.log('end of script');