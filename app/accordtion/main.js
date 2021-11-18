let buttons = document.querySelectorAll('.question-btn');
//console.log(buttons); 


function hideAllElement(){
    let queryElementTexts = document.querySelectorAll('.question-text');
    console.log(queryElementTexts);
    
    queryElementTexts.forEach(function(queryElementText){
     queryElementText.style.display = 'none';
    });
        
 } 

 


function printMe(button){
    button.addEventListener('click',function(){
        
        let currentElement = this;
        questionWrapperElement = currentElement.parentNode.parentNode;
        questionTextElement = questionWrapperElement.querySelector('.question-text');

        console.log(questionTextElement);
        hideAllElement();
        //apply display block
        questionTextElement.style.display = 'block';
        

    });
}
buttons.forEach(printMe); 


