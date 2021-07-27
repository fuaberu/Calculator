//constants
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousTextElement = document.querySelector('[data-previous-operand]');
const currentTextElement = document.querySelector('[data-current-operand]');
//event linsteners
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        //console.log();
    })
});

//append the number at the screendata-number    
function appendNumber(number) {
    currentTextElement.textContent = number;
};