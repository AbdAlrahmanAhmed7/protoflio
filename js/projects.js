let scrollUp = document.getElementById('scroll-up');

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
        behavior:"smooth"
    })
}    