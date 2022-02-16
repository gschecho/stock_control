const slotLayerTres = document.getElementById('slot-layer-3');
const slotLayerCuatro = document.getElementById('slot-layer-4');
const medida = document.querySelectorAll('.medida');

const listaButtons = document.querySelector('.buttons-medidas-list');



datos(0, slotLayerTres);
datos(0, slotLayerCuatro);

/* 


const guardarBizcocho = (nombre, medida, tres, cuatro, cantidad) => db.collection('bizcocho').doc().set({
nombre,
medida,
tres,
cuatro,
cantidad
})


await guardarBizcocho()

const obtenerBizcocho = ()=> db.collection('bizcocho').get();

window.addEventListener('DOMContentLoader', async (e) =>{
    const querySnapshot = await obtenerBizcocho();

    querySnapshot.forEach( doc => {doc.data()} )
})

 */

/*######## CREAR STOCK ######## */


 /* 
let nuevoBizcocho = {
"nombre" : "Vanilla",
"medida":,
"layers":,
"cantidad":
}


console.log( JSON.stringify( nuevoBizcocho ));

  */




// valores de stock - medida de pasteles - numero de layers

const stocks = {
    "medida-10": {
        "3": 5,
        "4": 50
    },
    "medida-15": {
        "3": 60,
        "4": 10
    },
    "medida-18": {
        "3": 3,
        "4": 15
    },
    "medida-20": {
        "3": 12,
        "4": 0
    }
};





// lo que se enseña en los layers 3 y 4 

let digitosSlotLayerTres, digitosSlotLayerCuatro = 0;




//Coge los datos del Objeto stock 

function buscandoValorStock(x) {

    let valoresStock = Object.keys(stocks);

    for (i = 0; i < valoresStock.length; i++) {

        if (valoresStock[i].includes(x)) {

            const map = new Map(Object.entries(stocks));
            const segundoObjStock = map.get(valoresStock[i]);

            digitosSlotLayerTres = segundoObjStock[3];
            digitosSlotLayerCuatro = segundoObjStock[4];

        }

    }
};




//resalta los numeros


medida.forEach(buttonMedida => {



 /*   let medidaId= buttonMedida.getAttribute('data-medida-id');
   let mapaMedidas =  new array(medidaId);

   console.log(mapaMedidas)
 
   (botonActivo === aString)? console.log('si'): console.log('no'); */
   




/*     function activo(a){

        for(let i = 0; i < medida.length; i++){
   
               let botonActivo = medida[i].textContent.toString();
               let aString = a.toString();
   
               console.log(botonActivo + ' ' + typeof(botonActivo))
               console.log(aString +' '+ typeof(aString))
   
           
   
   
               
   
           
        };  
    }
 */
 
    
    
buttonMedida.addEventListener("mouseenter", function () {

        
        
        renderStock(buttonMedida);
 

            buttonMedida.classList.toggle("mostrarStock");
       
    });


    
    buttonMedida.addEventListener("mouseleave", function () {


           buttonMedida.classList.remove("mostrarStock");
        
    });
    

    
   
});







 


// asigna valores

function datos(a, b) {

    if (a >= 10 && a < 20) {
        b.classList.remove("stock-bajo", "stock-alto")
        b.innerHTML = a;
        b.classList.add("stock-medio");
    } else if (a < 10) {
        b.classList.remove("stock-alto", "stock-medio")
        b.innerHTML = a;
        b.classList.add("stock-bajo");
    } else {
        b.classList.remove("stock-bajo", "stock-medio")
        b.innerHTML = a;
        b.classList.add("stock-alto");
    }
};












// renderiza stock

function renderStock(a) {

    const datosMedida = a.getAttribute('data-medida-id');
 
    switch (datosMedida) {

        case '10':
           // activo(datosMedida);
            buscandoValorStock(datosMedida);
            datos(digitosSlotLayerTres, slotLayerTres);
            datos(digitosSlotLayerCuatro, slotLayerCuatro);
            break;
        case '15':
           // activo(datosMedida);
            buscandoValorStock(datosMedida);
            datos(digitosSlotLayerTres, slotLayerTres);
            datos(digitosSlotLayerCuatro, slotLayerCuatro);
            break;
        case '18':
           // activo(datosMedida);
            buscandoValorStock(datosMedida);
            datos(digitosSlotLayerTres, slotLayerTres);
            datos(digitosSlotLayerCuatro, slotLayerCuatro);
            break;
        case '20':
            //activo(datosMedida);
            buscandoValorStock(datosMedida);
            datos(digitosSlotLayerTres, slotLayerTres);
            datos(digitosSlotLayerCuatro, slotLayerCuatro);
            break;
        default: datos(0, slotLayerTres);
            datos(0, slotLayerCuatro);

            break;

    };
};




//https://code.tutsplus.com/tutorials/how-to-get-and-use-html5-data-attributes-in-javascript--cms-37722

