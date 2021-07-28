 
let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
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
    document.getElementById("entry").innerText = newVal;
}
 
function mathButPress(operator){
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
}
 
function equalButPress(){
    decimalClicked = false;
 
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
 
    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }

    prevVal = resultVal;
 
    document.getElementById("entry").innerText = resultVal;
}

function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").innerText = "0";
}
