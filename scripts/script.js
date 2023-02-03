let boton = document.getElementById('btnADD');


let contenedor = document.getElementById('ulPadre')
let txt = 'Hola'
let modelo = `<li class="list-group-item centrado liADD">
<img src="" alt="." class="izq" id="imagen">
<p class="txt centrado" id="txt">
    ${txt}
</p>

<!-- Esto tiene que ser un modal -->

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary mas" data-bs-toggle="modal" data-bs-target="#exampleModal">
    +
</button>`;


/* Funcion constructura del listado */

const addELement=()=>{
    contenedor.innerHTML += modelo
}


boton.addEventListener('click',()=>{
    addELement()
})

