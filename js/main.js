let skills = document.getElementById('skills');
let works = document.getElementById('works');
let Contact = document.getElementById('Contact');
let scrollUp = document.getElementById('scroll-up');

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