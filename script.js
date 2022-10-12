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
    console.log(key)
    

   
  }
    
  if(key.classList.contains('clear')){
    location.reload();
  }
   
  keys.dataset.previousKeyType = type;
   
});
