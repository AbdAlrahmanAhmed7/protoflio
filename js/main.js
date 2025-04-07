let skills = document.getElementById('skills');
let works = document.getElementById('works');
let Contact = document.getElementById('Contact');
let scrollUp = document.getElementById('scroll-up');
let logo = document.querySelector('.logo');
let nav = document.getElementById('nav-scroll')
let container = document.querySelector('.left-sec');
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
    if(this.scrollY >= 400){
        anime({
            targets: ".card",
            opacity: 1,
            translateY: 0,
        })
    }
    if(this.scrollY >= 350){
        anime({
            targets: "#anime-title",
            opacity: 1,
            translateY: 0,
        })
    }
}
scrollUp.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
}
window.onload = function(){
    anime({
        targets: logo,
        opacity: 1,
        translateX:0,
    })
    anime({
        targets: nav,
        opacity: 1,
        translateY:0,
    })
    anime({
        targets: container2,
        opacity: 1,
        translateX: -150,
    })
    anime({
        targets: container,
        opacity: 1,
        translateX: 0,
    })
}