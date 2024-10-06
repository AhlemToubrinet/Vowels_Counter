const textInput = document.querySelector('.input-container textarea');
const checkBtn = document.querySelector('.input-container button');
const counter = document.getElementById('counter');

function getVowels(){
    let text = textInput.value;
    if(!text)alert("Please enter some text to get its number of vowels");
    else {
        let count = 0;
        let vowels = ['a' , 'e' , 'i' , 'o' , 'u' ];
        for( let letter of text.toLowerCase()){
            if(vowels.includes(letter))count++;
        }
        counter.innerText = count;
    }
}