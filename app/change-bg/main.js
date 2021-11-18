/*Automatic background color chanage*/
var myFile = document.getElementById('test');
myFile.addEventListener('click',function(){
     let randomColor = generateRandomColor(),
     bodytag = document.getElementById('body-tag'),
     h1tag = document.getElementById('color');

     bodytag.style.backgroundColor = randomColor;
     h1tag.innerHTML = randomColor;
});

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor (max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

function generateRandomColor()
{
    let red,green,blue,style,
    head ='rgb(',
    seperator = ' ',
    tail =')';

    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);
    style = head + red + seperator + green + seperator + blue + tail;
    return style;
}
/*Automatic background color chanage End*/

