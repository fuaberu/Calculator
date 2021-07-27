//window oppend
// window.addEventListener('load', (event) => {
//     appendNumber(0);
//   });
//constants
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const actionButtons = document.querySelectorAll('[data-action]');
const previousTextElement = document.querySelector('[data-previous-operand]');
const currentTextElement = document.querySelector('[data-current-operand]');
//event listeners// 
numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        let output = reverseFormat(getOutput());
        let previousOutput = getPreviousValue();
        if (output === '0') {
            printOutput(this.innerText);
          } else {
            printOutput(output + this.innerText);
          }
        if (this.innerText === '.') {
            printOutput(output + '.')
        } 
        // if (output !== NaN) {
        //     output = output + this.innerText;
        //     printOutput(output);
        // } else if (previousOutput.slice(-1) == '+'){
        //     printOutput('');
        //     output = output + this.innerText;
        //     printOutput(output);
        // }
    });
});

actionButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.innerText == 'AC') { //all clear action
            printOutput('0');
            printPrevious('');
        } else if (this.innerText == 'del') { //delete action
            let output = reverseFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length - 1);
                printOutput(output);
            }
        } else if(this.innerText == '='){ //equal action
            let output = reverseFormat(getOutput()).toString();
            let previousOutput = getPreviousValue();
            if (output !== ''){
                output = reverseFormat(output);
                console.log(output);
                previousOutput = getPreviousValue();
                console.log(previousOutput);
                if (previousOutput.slice(-1) == '+') { //check if is an add function
                    let num1 = previousOutput.substr(0,output.length - 2)
                    printOutput(add(num1, output));
                }
        }  
    };
    });
});
operationButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (getOutput() !== '') { //if its not empty
            let output = reverseFormat(getOutput()).toString();
                let previousOutput = getPreviousValue();  

            if (this.innerText == '+') { //add operation
                printPrevious(output + ' +');
                
            } else if (this.innerText == '-') { //subtract operation
                printPrevious(output + ' -');

            } else if (this.innerText == '÷') { //divide operation
                printPrevious(output + ' ÷');

            } else if (this.innerText == '×') { //multiply operation
                printPrevious(output + ' ×');

            } else if (this.innerText == '%') { //percentage operation 
                printPrevious(output + ' %');
                printOutput(percentage(output))
            }
        } 
    });
});

//functions
function getPreviousValue () {
    return previousTextElement.innerText;
};
function printPrevious (num) {
    return previousTextElement.innerText = num;
};
function getOutput () {
    return currentTextElement.innerText;
};
function printOutput (num) {
    if (num === '0') {
        currentTextElement.textContent = '';
    } currentTextElement.innerText = num; //formatNumber(num) (can be used to formate as 1,000,000)
};
function formatNumber (num) {
    let n = Number(num);
    let valuer = n.toLocaleString('en');//to divide the number as 1,000,000
    return valuer
};
function reverseFormat (num) {
    return Number(num.replace(/,/g,''));
};

//math functions
function add(num1,num2) {
    return num1 + num2;
};
function subtract(num1,num2) {
    return num1 - num2;
};
function multiply(num1,num2) {
    return num1 * num2;
};
function divide(num1,num2) {
    return num1 / num2;
};
function percentage(num1) {
    return num1 / 100;
};
