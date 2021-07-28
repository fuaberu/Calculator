let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let percentVal = "";
let equalVal = false;
let percentValFull = false;
let decimalClicked = false;
 
function numButPress(num){
    
    if(resultVal){
        newVal = num;
        resultVal = "";
    } else {
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    equalVal = false;
    document.getElementById("entry").innerText = newVal;
}
 
function mathButPress(operator){
    let alreadyEqual = document.getElementById("previous-entry").innerText.toString();

    if (newVal == "" || newVal == ".") {
        return
    } else {
        if(alreadyEqual.slice(-1) !== "=") {
            equalButPress();
        }
        if(!resultVal){
            prevVal = newVal;
        } else {
            prevVal = resultVal;
        }
        newVal = "";
        decimalClicked = false;
        mathOperator = operator;
        resultVal = "";
        document.getElementById("entry").innerText = "";
        document.getElementById("previous-entry").innerText = prevVal + " " + operator;
    }
}
 
function equalButPress(){
    if (equalVal == false) {
        if (!prevVal || newVal == "" || newVal == ".") {
            return
        }

        decimalClicked = false; //can use decimal again
     
        prevVal = parseFloat(prevVal); //turn into a number
        newVal = parseFloat(newVal);
            
        switch(mathOperator){
            case "+":
                resultVal = prevVal + newVal;
                break;
            case "-":
                resultVal = prevVal - newVal;
                break;
            case "×":
                resultVal = prevVal * newVal;
                break;
            case "÷":
                resultVal = prevVal / newVal;
                break;
            case "%":
                resultVal = prevVal / 100;
                break
            default:
                resultVal = newVal;
        }   
        prevVal = resultVal;
     
        document.getElementById("entry").innerText = roundUp(resultVal); //output the result
        document.getElementById("previous-entry").innerText += " " + newVal; //output the history
        equalVal = true;
        if (mathOperator === "%") {
            document.getElementById("previous-entry").innerText = percentVal + " " + mathOperator;
            console.log("% local")
            if (percentValFull === false) { //check if the percentage variabel is used
                percentValFull = true;
                percentVal = newVal;
                console.log("first")
            }    
        } 
    }
}

function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    percentVal = "";
    equalVal = false;
    decimalClicked = false;
    percentValFull = false;
    document.getElementById("entry").innerText = "";
    document.getElementById("previous-entry").innerText = "";
}

function deleteButPress(){
    let toDeleteText = document.getElementById("entry").innerText.toString();
    toDeleteText = toDeleteText.substr(0,toDeleteText.length - 1);
    document.getElementById("entry").innerText = toDeleteText;
    newVal = toDeleteText;
    if (decimalClicked === true) {
        if (newVal.search(".")) {
            decimalClicked = true;
        } decimalClicked = false;
    }
}

function roundUp(num){
    num = +num.toFixed(3);
    return num
}
roundUp(2.21189)
//keyboard inputs
document.addEventListener('keydown', (event) => {
    let num = event.key;
    if (num >= 0 && num <= 9) {
        numButPress(num)
    }
    switch(event.key){
        case "Backspace":
            deleteButPress();
            break;
        case "Delete":
            clearButPress();
            break;
        case "/":
            mathButPress("÷");
            break;
        case "*":
            mathButPress("×");
            break;
        case "-":
            mathButPress("-");
            break;
        case "+":
            mathButPress("+");
            break;
        case "%":
            mathButPress("%");
            break;
        case ".":
            numButPress(".");
            break;
        case "Enter":
            equalButPress();
            break;
    }
});

