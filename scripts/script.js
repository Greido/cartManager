


 /* IDs del formulario de ingreso */

let producto = document.getElementById('productoIngresado');

let categoria = document.getElementById('inputGroupSelect01');

let descripcion = document.getElementById('descripcion')


/*  */



let txt = 'Hola gay'
let boton = document.getElementById('btnADD');
let contenedor = document.getElementById('ulPadre')






/* 
document.addEventListener('click',function(e){
    console.log(e)
})
 */


/* Funcion constructura del listado */

const addELement=()=>{
    
    let prodFinal = producto.value
    let catFinal = categoria.value
    let descFinal = descripcion.value

    if (catFinal==1){
        catFinal = 'Verduras.png'
    } else if (catFinal == 2){
        catFinal = 'Lacteos.png'
    }else if (catFinal == 3){
        catFinal = 'Carne.png'
    }else if (catFinal == 4){
        catFinal = 'Electronica.png'
    }

    console.log(catFinal)

    
    let modelo = `<li class="list-group-item centrado liADD">
    <img src="/images/${catFinal}" alt="." class="izq imagenLista" id="imagen">
    <p class="txt centrado" id="txt">
    ${prodFinal}
    </p>

    <!-- Esto tiene que ser un modal -->

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary mas" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="verMas">
    +
    </button>`;

    contenedor.innerHTML += modelo

}

/* --------------------------------- */

boton.addEventListener('click',()=>{
    addELement()

})




