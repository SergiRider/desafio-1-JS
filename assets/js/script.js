const d= document
const selectElement = d.querySelector('.nieve');
const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

let formulario= d.querySelector(".formulario")
formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    let cantidadElegida = d.querySelector(".cantidadElegida").value
    let colorElegido=d.querySelector(".colorElegido").value

imprimir(cantidadElegida, colorElegido)

   
})

function imprimir(cantidadElegida, colorElegido){
    let mostrarCantidad= d.querySelector(".resultado1")
    mostrarCantidad.innerHTML=`
    <div class="resultadoFormulario">
    <p>La cantidad total de tus productos es: ${cantidadElegida}</p>
    <p>El valor total de tu compra es ${formatoPeso.format(cantidadElegida * 150000)}</p>
    <p>El color que elegiste es: <span style="font-weight:700; color:${colorElegido}">${colorElegido}</span></p>
    </div>`
    let mostrarColor=d.querySelector(".resultado2")
    mostrarColor.style.backgroundColor=colorElegido
    mostrarColor.style.border="black 1px solid"
}