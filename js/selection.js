const selection_input_size = document.querySelector('.bloque__sel');
const number_input= document.querySelector('#input__number')
const increment_number = document.querySelector('#add');
const decrement_number = document.querySelector('#subtract')



//incrementar y quitar bizcohos

increment_number.addEventListener('click', function(){
    number_input.value++
}) 
decrement_number.addEventListener('click', function(){
    number_input.value--
}) 

// check selección

console.log(selection_input_size.childNodes);

