
const inputEl = document.querySelector('.input')
const outputEl = document.querySelector('.output')
const numberEL = document.querySelectorAll('.number')
const basicOperators = document.querySelectorAll('.btn-side')
const equalEl = document.querySelector('.equal')
const allClearEl = document.getElementById('AC')
const deleteEl = document.getElementById('delete')
const doubleOpsEl = document.getElementById('doubleOps')
const modulusEl = document.getElementById('percent')
const toggleButton = document.querySelector('.icon-btn')
const body = document.body

numberEL.forEach((number) => (number.addEventListener('click', function () {
    let value = number.textContent;
    inputEl.value += value;
})))

basicOperators.forEach((operator) => (
    operator.addEventListener('click', function(){
        let value;
        if(operator.textContent === '÷' || operator.textContent === 'x' ) {
            value = (operator.textContent === '÷') ? '/' : '*';
        } else{
            value = operator.textContent;
        }
        inputEl.value += value;
    })
))

equalEl.addEventListener('click', function(){
    outputEl.value = eval(inputEl.value);
})

allClearEl.addEventListener('click', function(){
    inputEl.value = outputEl.value = ''
})

deleteEl.addEventListener('click', function(){
    inputEl.value = inputEl.value.slice(0, -1)
})
doubleOpsEl.addEventListener ('click' , function(){
    value = inputEl.value;
    if (value.charAt(0) === '+'){
        inputEl = value;
    }
    else if ( value.charAt(0) === '-'){
        inputEl.value = value.slice(1);
    }
    else (inputEl.value = '-' + value);
})
modulusEl.addEventListener ('click', function (){
    if (modulusEl.textContent === '%'){
        value = inputEl.value / 100 || outputEl.value / 100;
         outputEl.value = value;
    }
})
toggleButton.addEventListener('click', function(){
    if(body.classList.contains('dark-theme')){
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }else if(body.classList.contains('light-theme')){
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
     }

  });
 