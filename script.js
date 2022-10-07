// Basic math functions
const add = (a,b)=> a+b;
const subtract = (a,b) => a -b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

// Takes 2 numbers and a sign, and returns result
function operate(num1, sign, num2){
    if(sign == '+'){
        return add(num1,num2)   
    }else if(sign == '-'){
        return subtract(num1, num2) 
    }else if(sign == '*'){
        return multiply(num1,num2)
    }else if(sign == '/'){
        return divide(num1,num2)
    }

}

