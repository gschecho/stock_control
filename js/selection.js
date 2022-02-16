const selection_input_size = document.querySelector('.size');
const selection_input_layers = document.querySelector('.layers');
const number_input = document.querySelector('#input__number')
const increment_number = document.querySelector('#add');
const decrement_number = document.querySelector('#subtract');

const bizcocho_lista = document.querySelector('#pasteles__lista');
const bizcocho_name = document.querySelector('#bizcocho');



//llamado de funciones

inicio();
seleccion__bizcocho();



//default 

function inicio() {

    selection_input_layers.childNodes.forEach(layer => {
        layer.checked = false;
    })
    selection_input_size.childNodes.forEach(layer => {
        layer.checked = false;
    })


    let bizcochoDefault = bizcocho_lista[0]
    bizcocho_name.innerHTML = "Bizcocho de " + bizcochoDefault.value;
    if (bizcochoDefault.defaultSelected == true) {
        bizcochoDefault.selected = true;
    }

}

// nos muestra el pastel seleccionado

function seleccion__bizcocho() {
    for (let i = 0; i <= bizcocho_lista.length; i++) {

        let bizcochoSelecionado = bizcocho_lista[i];

        if (bizcochoSelecionado != undefined) {

            bizcochoSelecionado.addEventListener('click', () => {
                //nosa da el numero que seleccionamos
                let bizcochoName = bizcochoSelecionado.getAttribute('value');
                bizcocho_name.innerHTML = "Bizcocho de " + bizcochoName;
            })
        }
    };
};



//incrementar y quitar bizcohos


increment_number.addEventListener('click', function () {
    number_input.value++
})
decrement_number.addEventListener('click', function () {
    (number_input.value > 0) ? number_input.value-- : number_input.value = 0;

})

// check selección



selection_input_size.childNodes.forEach(inputs => {

    inputs.addEventListener('click', () => {

        //nosa da el numero que seleccionamos
        size = inputs.getAttribute('for');

        //cambia de true a false lo que selecciona
        let isChecked = inputs.previousElementSibling;
        (isChecked.checked == true) ? isChecked.checked = false : isChecked.checked = true;

    })
});

selection_input_layers.childNodes.forEach(layers => {

    layers.addEventListener('click', () => {

        //nosa da el numero que seleccionamos
        layersCantidad = layers.getAttribute('for');

        //cambia de true a false lo que selecciona

        let isChecked = layers.previousElementSibling;
        (isChecked.checked == true) ? isChecked.checked = false : isChecked.checked = true;


    })
});



