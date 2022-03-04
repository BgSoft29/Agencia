
// console.log('si se conecto a la base de datos');
const nav = document.querySelector('.header__nav');

function cambioNavScroll(){
    // console.log('hiciste scroll');
    // nav.classList.add('active');
    // console.log(window.pageYOffset);
    if(window.pageYOffset > 0){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}

// cambioNavScroll();
window.addEventListener('scroll', cambioNavScroll);

/*******************************************/
const btnMenu = document.querySelector('.header__nav__contenedor--btn');
const menu = document.querySelector('.header__nav__contenedor__menu');

btnMenu.addEventListener('click', function(){
    // console.log('hiciste click');
    // menu.classList.add('active');
    menu.classList.toggle('active');
})