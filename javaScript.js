let display = document.getElementById("inputbox");
let question = document.getElementById("question");
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
let shift = false;
let isDegree = true;

document.getElementById('degree').style.backgroundColor = 'green';
document.getElementById('degree').style.color = 'white';


buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            question.innerHTML = 'Ans = 0';
            string = '';
            display.value = string;
        }
        else if (e.target.innerHTML == '=') {
            question.innerHTML = string;
            string = eval(string);
            display.value = string;
        }
        else if (e.target.innerHTML == 'sin') {
            question.innerHTML = `sin(${display.value})`;
           
            string = isDegree ? Math.sin(display.value * (Math.PI / 180)) : Math.sin(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == 'cos') {
            question.innerHTML = `cos(${display.value})`;
            string = isDegree ? Math.cos(display.value * (Math.PI / 180)) : Math.cos(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == 'tan') {
            question.innerHTML = `tan(${display.value})`;
            string = isDegree ? Math.tan(display.value * (Math.PI / 180)) : Math.tan(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == 'x<sup>y</sup>') {
            question.innerHTML = string;
            try {
                // Handle x^y explicitly
                if (string.includes('^')) {
                    let parts = string.split('^');
                    if (parts.length == 2) {
                        let base = parseFloat(parts[0]);
                        let exponent = parseFloat(parts[1]);
                        string = Math.pow(base, exponent);
                    }
                } else {
                    // General evaluation
                    string = eval(string);
                }
                display.value = string;
            } catch (err) {
                display.value = 'Error';
            }
        }
        
        
        else if (e.target.innerHTML == 'x<sup>3</sup>') {
            question.innerHTML = `${display.value}^3`;
            string = Math.pow(display.value, 3);
            display.value = string;
        }        
        else if (e.target.innerHTML == 'x<sup>2</sup>') {
            question.innerHTML = `${display.value}^2`;
            string = Math.pow(display.value, 2);
            display.value = string;
        }
        // For the exponential function e^x
        else if (e.target.innerHTML == 'e<sup>x</sup>') {
            question.innerHTML = `e^(${display.value})`;
            string = Math.exp(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == '10<sup>x</sup>') {
            question.innerHTML = `10^(${display.value})`;
            string = Math.pow(10, display.value);
            display.value = string;
        }
        
        else if (e.target.innerHTML == 'log') {
            question.innerHTML = `log(${display.value})`;
            string = Math.log10(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == 'n!') {
            question.innerHTML = `${display.value}!`;
            var i, num, f;
            f = 1;
            num = display.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            display.value = f;
        }
        else if (e.target.innerHTML == 'ln') {
            question.innerHTML = `ln(${display.value})`;
            string = Math.log(display.value); // ln(x) is the natural logarithm of x
            display.value = string;
        }
        else if (e.target.innerHTML == 'log') {
            question.innerHTML = `log(${display.value})`;
            string = Math.log10(display.value); // log(x) is the base-10 logarithm of x
            display.value = string;
        }

        else if (e.target.innerHTML == '%') {
            question.innerHTML = `${display.value} %`;
            string = display.value / 100;
            display.value = string;
        }
        
    
        else if (e.target.innerHTML == 'shift') {
            shift = !shift;
            updateShiftButtons();
        }
        else if (e.target.id == 'degree') {
            isDegree = true;
            document.getElementById('degree').style.backgroundColor = 'green';
            document.getElementById('degree').style.color = 'white';
            document.getElementById('radian').style.backgroundColor = '';
        }
        else if (e.target.id == 'radian') {
            isDegree = false;
            document.getElementById('radian').style.backgroundColor = 'green';
            document.getElementById('radian').style.color = 'white';
            document.getElementById('degree').style.backgroundColor = '';
        }


        else if (e.target.innerHTML == 'sin⁻¹') {
            question.innerHTML = `sin⁻¹(${display.value})`;
            if (isDegree) {
                string = Math.asin(display.value);
                display.value = Math.round(string * (180 / Math.PI));
            }
            else if (!isDegree) {
                string = Math.asin(display.value);
                display.value = string;
            }
        }

        else if (e.target.innerHTML == 'cos⁻¹') {
            question.innerHTML = `cos⁻¹(${display.value})`;
            if (isDegree) {
                string = Math.acos(display.value);
                display.value = Math.round(string * (180 / Math.PI));
            }
            else if (!isDegree) {
                string = Math.acos(display.value);
                display.value = string;
            }
        }
        else if (e.target.innerHTML == 'tan⁻¹') {
            question.innerHTML = `tan⁻¹(${display.value})`;
            if (isDegree) {
                string = Math.atan(display.value);
                display.value = Math.round(string * (180 / Math.PI));
            }
            else if (!isDegree) {
                string = Math.atan(display.value);
                display.value = string;
            }
        }
        

        else if (e.target.innerHTML == 'y<sub>√x</sub>') {
            let values = display.value.split('√');
            if (values.length == 2) {
                let exponent = parseFloat(values[0]); 
                let base = parseFloat(values[1]); 

                if (!isNaN(exponent) && !isNaN(base)) {
                    if (exponent <= 0) {
                        display.value = "Error";
                        return;
                    }
                    let result = Math.pow(base, 1 / exponent);
                    question.innerHTML = `${exponent}√(${base})`;
                    display.value = result;
                } else {
                    display.value = "Error";
                }
            } else {
                display.value = "Error";
            }
        }

        else if (e.target.innerHTML == '3<sub>√x</sub>') {
            question.innerHTML = `3√(${display.value})`;
            string = Math.cbrt(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == '√x') {
            question.innerHTML = `√(${display.value})`;
            string = Math.sqrt(display.value);
            display.value = string;
        }
        else if (e.target.innerHTML == 'π') {
            // Append π to the current input
            string += Math.PI;
            display.value = string;
        }
        // For the constant e
        else if (e.target.innerHTML == 'e') {
            question.innerHTML = `e`;
            string += Math.E;
            display.value = string;
        }
        else if (e.target.innerHTML == 'x<sup>-1</sup>') {
            question.innerHTML = `1/(${display.value})`;
            string = 1 / display.value;
            display.value = string;
        }
        else if (e.target.innerHTML == 'shift') {
            shift = !shift;
            updateShiftButtons();
        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});

function clear(){
    if (e.target.innerHTML == 'AC') {

    }
}

function updateShiftButtons() {
    if (shift) {
        document.querySelector('#small1 small:nth-child(1)').innerHTML = 'sin';
        document.querySelector('#small1 small:nth-child(2)').innerHTML = 'cos';
        document.querySelector('#small1 small:nth-child(3)').innerHTML = 'tan';
        document.querySelector('#small2 small:nth-child(1)').innerHTML = 'x<sup>y</sup>';
        document.querySelector('#small2 small:nth-child(2)').innerHTML = 'x<sup>3</sup>';
        document.querySelector('#small2 small:nth-child(3)').innerHTML = 'x<sup>2</sup>';
        document.querySelector('#small2 small:nth-child(4)').innerHTML = 'e<sup>x</sup>';
        document.querySelector('#small2 small:nth-child(5)').innerHTML = '10<sup>x</sup>';
        document.querySelector('#small3 small:nth-child(1)').innerHTML = '^';
        document.querySelector('#small3 small:nth-child(2)').innerHTML = 'n!';

        document.querySelector('#btn1 button:nth-child(1)').innerHTML = 'sin⁻¹';
        document.querySelector('#btn1 button:nth-child(2)').innerHTML = 'cos⁻¹';
        document.querySelector('#btn1 button:nth-child(3)').innerHTML = 'tan⁻¹';
        document.querySelector('#btn2 button:nth-child(1)').innerHTML = 'y<sub>√x</sub>';
        document.querySelector('#btn2 button:nth-child(2)').innerHTML = '3<sub>√x</sub>';
        document.querySelector('#btn2 button:nth-child(3)').innerHTML = '√x';
        document.querySelector('#btn2 button:nth-child(4)').innerHTML = 'π';
        document.querySelector('#btn2 button:nth-child(5)').innerHTML = 'e';
        document.querySelector('#btn3 button:nth-child(2)').innerHTML = '√';
        document.querySelector('#btn3 button:nth-child(3)').innerHTML = 'x<sup>-1</sup>';
    } else {
        document.querySelector('.small small:nth-child(1)').innerHTML = 'sin<sup>-1</sup>';
        document.querySelector('.small small:nth-child(2)').innerHTML = 'cos<sup>-1</sup>';
        document.querySelector('.small small:nth-child(3)').innerHTML = 'tan<sup>-1</sup>';
        document.querySelector('#small2 small:nth-child(1)').innerHTML = 'y<sub>√x</sub>';
        document.querySelector('#small2 small:nth-child(2)').innerHTML = '3<sub>√x</sub>';
        document.querySelector('#small2 small:nth-child(3)').innerHTML = '√x';
        document.querySelector('#small2 small:nth-child(4)').innerHTML = 'π';
        document.querySelector('#small2 small:nth-child(5)').innerHTML = 'e';
        document.querySelector('#small3 small:nth-child(1)').innerHTML = '√';
        document.querySelector('#small3 small:nth-child(2)').innerHTML = 'x<sup>-1</sup>';

        document.querySelector('#btn1 button:nth-child(1)').innerHTML = 'sin';
        document.querySelector('#btn1 button:nth-child(2)').innerHTML = 'cos';
        document.querySelector('#btn1 button:nth-child(3)').innerHTML = 'tan';
        document.querySelector('#btn2 button:nth-child(1)').innerHTML = 'x<sup>y</sup>';
        document.querySelector('#btn2 button:nth-child(2)').innerHTML = 'x<sup>3</sup>';
        document.querySelector('#btn2 button:nth-child(3)').innerHTML = 'x<sup>2</sup>';
        document.querySelector('#btn2 button:nth-child(4)').innerHTML = 'e<sup>x</sup>';
        document.querySelector('#btn2 button:nth-child(5)').innerHTML = '10<sup>x</sup>';
        document.querySelector('#btn3 button:nth-child(2)').innerHTML = '^';
        document.querySelector('#btn3 button:nth-child(3)').innerHTML = 'n!';
    }
}
