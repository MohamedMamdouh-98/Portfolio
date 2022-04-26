// wow.js
new WOW().init();

const menu = document.getElementById('action');
const icon = document.getElementById('menu');
const up = document.getElementById('up');
icon.onclick = function() {
    menu.classList.toggle('menu-media');
}

window.onscroll = function() {
    this.scrollY >= 590 ? up.classList.add('show'): up.classList.remove('show')
}

up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }) 
}