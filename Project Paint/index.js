// ! Navigation bar for Mobile Screens

const menuButton = document.getElementById('menu_button');
const line_1 = document.getElementById('line_1');
const line_2 = document.getElementById('line_2');
const line_3 = document.getElementById('line_3');
const menu = document.getElementById('menu');

menuButton.onclick = ()=> {
    line_1.classList.toggle('line_1_animation');
    line_2.classList.toggle('line_2_animation');
    line_3.classList.toggle('line_3_animation');
    menu.classList.toggle('menu_transform');

}


// ! Navigation bar reveal on scroll

const body = document.body;
const nav = document.getElementById("scroll_nav");

window.addEventListener('scroll', () => {

    const currentScroll = window.scrollY;
    console.log(currentScroll);

    if (currentScroll >= 700) {nav.classList.remove('translate-y-[-100%]');}
    if (currentScroll < 700 ) {nav.classList.add('translate-y-[-100%]');}
})