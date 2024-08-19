// first we will generate random color

const randomColor = function (){
const hex = '123456789ABCDEF';
let color = '#'
for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() *16)];
}
return  color;
}

let countInterval;
const StartChaingingColor =  function(){
if(!countInterval){
    countInterval = setInterval(bgColorChanger,500)
 }
 function bgColorChanger() {
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor =  function(){
    clearInterval(countInterval);
    countInterval = null;
};

document.getElementById('start').addEventListener('click', StartChaingingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);
