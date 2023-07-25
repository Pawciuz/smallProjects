const btnSizeUp = document.querySelector('.sizeUp');
const btnSizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const text = document.querySelector('.text p')
const textStyle = getComputedStyle(text);
let fontSize = Number(textStyle.fontSize.slice(0,-2));
const sizeUp = () => {
    fontSize+=2
    text.style.fontSize = fontSize+"px"
}
const sizeDown = () => {
    if(fontSize>20){
    fontSize-=2
    text.style.fontSize = fontSize+"px"
    }
}
const colorChange = () => {
    text.style.color = '#'+Math.floor(Math.random()*1000000);
}
btnSizeUp.addEventListener('click',sizeUp)
btnSizeDown.addEventListener('click',sizeDown)
btnColor.addEventListener('click',colorChange)