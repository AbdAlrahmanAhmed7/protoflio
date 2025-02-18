let skills = document.getElementById('skills');
let works = document.getElementById('works');
let Contact = document.getElementById('Contact');
let scrollUp = document.getElementById('scroll-up');
let logoANE = document.querySelector('.logo');
let nav1 = document.getElementById('scroll-1');
let nav2 = document.getElementById('scroll-2');
let nav3 = document.getElementById('scroll-3');
let nav4 = document.getElementById('scroll-4');
let nav5 = document.getElementById('scroll-5');
let container = document.querySelector('.container');
let container2 = document.querySelector('.right-sec');

skills.onclick = function(){
    scroll({
        top:602,
        behavior:"smooth"
    })
}
Contact.onclick = function(){
    scroll({
        top:2330,
        behavior:"smooth"
    })
}
works.onclick = function(){
    scroll({
        top:1800,
        behavior:"smooth"
    })
}
window.onscroll = function(){
    if(this.scrollY >= 540){
        scrollUp.style.right = '30px';
    }else{
        scrollUp.style.right = '-60px'
    }
}
scrollUp.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
}
window.onload = function(){
    nav1.style.top = '0';
    nav1.style.opacity = '1';
    nav2.style.top = '0';
    nav2.style.opacity = '1';
    nav3.style.top = '0';
    nav3.style.opacity = '1';
    nav4.style.top = '0';
    nav4.style.opacity = '1';
    nav5.style.top = '0';
    nav5.style.opacity = '1';
    logoANE.style.left = '0';
    logoANE.style.opacity = '1';
    container.style.margin = '120px 150px 0 200px';
    container.style.opacity = '1';
    container2.style.margin = ' 0 0 0 260px'
    container2.style.opacity = '1';
    container2.style.right = '110px';
}