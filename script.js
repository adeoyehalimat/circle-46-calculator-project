
const inputEl = document.querySelector('.input')
const outputEl = document.querySelector('.output')
const numberEL = document.querySelectorAll('.number')
const basicOperators = document.querySelectorAll('.btn-side')
const equalEl = document.querySelector('.equal')
const allClearEl = document.getElementById('AC')
const deleteEl = document.getElementById('delete')


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