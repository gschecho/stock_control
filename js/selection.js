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

//console.log(selection_input_size.childNodes);

selection_input_size.childNodes.forEach(inputs=> {
    //console.log(inputs)
   

    inputs.addEventListener('click', ()=>{
     size = inputs.getAttribute('for');
    console.log(inputs.previousElementSibling)
    let isChecked = inputs.previousElementSibling.checked;
    
    isChecked ? isChecked = "true" : isChecked = "false";

    console.log(isChecked)
    console.log(size)
 


    })

    
});


console.log