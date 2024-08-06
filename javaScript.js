let display = document.getElementById('inputbox');
let question = document.getElementById('question');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);

let string = '';
let shift = false;
let isDegree = true;

document.getElementById('degree').style.backgroundColor = "green";
document.getElementById('degree').style.colorolor = "white";

buttonsArray.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length -1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            question.innerHTML = 'Ans = 0';
            string ='';
            display.value = string;
        }
        else if(e.target.innerHTML == '='){
            question.innerHTML = string;
            string =eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            question.innerHTML =    `sin(${display.value})`;
            string =isDegree ? Math.sin(display.value * (Math.PI/ 180)): Math.sin(display.value);
            display.value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            question.innerHTML =    `cos(${display.value})`;
            string =isDegree ? Math.cos(display.value * (Math.PI/ 180)): Math.cos(display.value);
            display.value = string;
        }
        else if(e.target.innerHTML == 'tan'){
            question.innerHTML =    `tan(${display.value})`;
            string =isDegree ? Math.tan(display.value * (Math.PI/ 180)): Math.tan(display.value);
            display.value = string;
        }
    })
})