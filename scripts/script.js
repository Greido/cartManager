
let listas = document.getElementById("tareasVisibles");
let listasVacias = document.getElementById('noContent')
let modalForm = document.getElementById('staticBackdrop')

 /* IDs del formulario de ingreso */

let formulario = document.getElementById('formulario')

let producto = document.getElementById('productoIngresado');

let categoria = document.getElementById('inputGroupSelect01');

let descripcion = document.getElementById('descripcion')


let boton = document.getElementById('btnADD');
let contenedor = document.getElementById('ulPadre')

let tituloCont = document.getElementById('verMasTitulo')

/* Test de fomrmulario :D */
const verMas=(titulo,categoria,descripcion)=>{
    console.log(descripcion)
    console.log(titulo)
    console.log(categoria)


    
}

const addItem =(titulo,categoria,descripcion)=>{
    console.log(descripcion,categoria,titulo);    
    let modelo = `<li class="list-group-item centrado liADD">
    <img src="/images/${categoria}" alt="." class="izq imagenLista" id="imagen">
    <p class="txt centrado" id="txt">
    ${titulo}
    </p>

    <button type="button" class="btn btn-primary mas"onclick="verMas('${titulo}', '${categoria}', '${descripcion}')">+</button>`;
    contenedor.innerHTML+=modelo
    
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let titulo= e.target.titulo.value;
    let categoria = e.target.inputGroupSelect01.value;
    let descripcion = e.target.descripcion.value;
    


    if (titulo&&categoria&&descripcion){
        console.log('el form esta completo');
        addItem(titulo,categoria,descripcion) ;
        listasVacias.style.display="none";
        listas.style.display="flex";
        formulario.reset();
        
    } else {
        alert('Debe completar el formulario')
    }

    
})



