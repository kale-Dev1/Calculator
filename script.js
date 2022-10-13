const keys = document.querySelector('.grid-container');
const display = document.querySelector('.screen');


keys.addEventListener('click', event =>{
  
  if(!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const type = key.dataset.type
  const previousKey = keys.dataset.previousKeyType

  
  // Check if its a number
  if (key.classList.contains('number')){
    if(displayValue ==='0'){
    display.textContent = keyValue
    }else if (previousKey == 'operator'){
      display.textContent = keyValue
    }else{
      display.textContent = displayValue + keyValue
    }
  }

  // Check if its a operator key
  if(type === 'operator'){
    const operatorKeys = keys.querySelectorAll('[data-type ="operator"]')
    operatorKeys.forEach(item => {item.dataset.state = ''})
    key.dataset.state = 'selected';
    
    keys.dataset.firstNumber = displayValue;
    keys.dataset.operator = key.dataset.key
  
  }

  if(type == 'equals'){
    //Perform Calculation
    const firstNumber = parseInt(keys.dataset.firstNumber);
    const operator = keys.dataset.operator;
    const secondNumber = parseInt(displayValue);
    console.log(firstNumber, operator, secondNumber)

    let result = '';

    if(operator == '+'){
      result = add(firstNumber, secondNumber)
    }else if(operator == '-'){
      result = subtract(firstNumber, secondNumber)
    }else if(operator == '/'){
      result = divide(firstNumber, secondNumber)
    }else if(operator == 'x'){
      result = multiply(firstNumber, secondNumber)
    }

    display.textContent = result;



  }
    

    
  if(key.classList.contains('clear')){
    location.reload();
  }
   
  keys.dataset.previousKeyType = type;
   
});

const add = (a,b) => a+b; 
const divide = (a,b) => a/b; 
const subtract = (a,b) => a-b; 
const multiply = (a,b) => a*b; 

