let loding = document.querySelector('.container');
let lodingText = document.querySelector('.text');
let newElement = document.createElement('span');

newElement.textContent = '.';

window.onload = function(){
    loding.style.opacity = '1';
    loding.style.scale = '1';
    lodingText.style.opacity = '1';
    lodingText.style.color = '#fff';
}
let hello = setInterval(function(){
    let dot = document.createElement('span');
    dot.textContent = '.';
    lodingText.appendChild(dot);
    if(lodingText.children.length == 4){
        clearInterval(hello);
    }
},1700)