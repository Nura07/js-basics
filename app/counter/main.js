/*Counter click Start*/
var token = 0,
myButtonElement =document.getElementById('counter'),
displayElement = document.getElementById('display');

myButtonElement.addEventListener('click',function(){
    displayElement.innerHTML = token;
    token = token + 1;
});
/*Counter click End*/

