const cards = document.getElementById("cards")
const ítems = document.getElementById("ítems")
const footer = document.getElementById("footer")
const templeateCard = document.getElementById("templeate-card").content
const templeatefooter = document.getElementById("footer").content
const templeateCarrito = document.getElementById("templeate-Carrito").content
const fragment = document.createDocumentFragment()
let carrito = {}

//eventos
document.addEventListener("DOMContentLoaded", () => {
    fetchData()

    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        pintarCarrito()
    }

})

cards.addEventListener("DOMContentLoaded", () => {
    addCarrito = (e) 
})

items.addEventListener("click", e => {
    btnAccion(e)
})

//traer productos 
const fetchData = async () => {
    try{
        const res = await fetch("appi.json")
        const data = await res.json()
        console.log(data)
    pintarProductos(data)
    } catch (error){
        console.log(error)
    }
}

//pintar productos 
const pintarCards = data => {
    console.log(data)
    data.forEach(producto =>{
        templeateCard.querySelector("h5").textContent = producto.title
        templeateCard.querySelector("p").textContent = producto.precio
        templeateCard.querySelector("img").setAttribute("src",producto.thumbnailURL)
        templeateCard.querySelector(".btn-dark").dataset.id = producto.id
        
        const clone = templeate.cloneNode(true)
        fragment.appendChild(clone)

})

item.appendChild(fragment)
}

//Agregar al carrito 
const addCarrito = e => {
    // console.log(e.target)
     //console.log(e.target.classlist.contains("btn-dark"))
     if (e.target.classlist.contains(btn-dark)) {
         setCarrito(e.target.parentElement)
        
     }    
     
     e.stopPropagatton()
 
 }

 const setCarrito = object => {
    console.log(objeto)
    const producto = {
       id: objeto.querySelector("btn-dark").dataset.id,
       title: objeto.querySelector("h5").textContent,
       precio: objeto.querySelector("p").textContent,
       cantidad: 1
    }
    
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
}
    
carrito[producto.id] = {...producto}
pintarCarrito()

 }
//objetos 
const pintarCarrito = () => {
      console.log(carrito)
      Object.values(carrito).forEach(producto => {
        templeateCarrito.querySelector("th").textContent = producto.id
        templeateCarrito.querySelectorAll("td")[0].textContent = producto.title
        templeateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templeateCarrito.querySelector("span").textContent= producto.cantidad * producto.precio 
       //botones 
        templeateCarrito.querySelector("btn-info").dataset.id = producto.id
        templeateCarrito.querySelector("btn-danger").dataset.id = producto.id

        
        const clone = templeateCarrito.cloneNode(true)
        fragment.appendChild(clone)
      
      })

      ítems.appendChild(fragment)

      pintarFooter()
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    
    const pintarFooter = () => {
        footer.innerHTML = ""
           if(Object.values(carrito).length === 0 ) {
            footer.innerHTML = "";
            <th scope = "row" colspan= "s"> Carrito vacio con innerHTML - comience a  comprar</th>;

          return


    }}
   
    //sumar cantidad y sumar totales 
    const ncantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad,0)
    const nprecio = Object.values(carrito).reduce((acc,{cantidad, precio}) => acc + cantidad * precio ,0)

    templeateFooter.querySelectorAll("td")[0].textContent = ncantidad
    templeateFooter.querySelectorAll("span").textContent = nprecio

    const clone = templeateFooter.cloneNode(true)
    fragment.appendChild(templeateFooter)
    footer.appendChild(fragment)

    const btnvaciar = document.getElementById("vaciar-carrito")
    btnvaciar.addEventListener("click", () =>{
   carrito = {}
   pintarCarrito()
})

const btnAccion = e => {
    console.log(e.target)
    if(e.target.classlist.contains("btn-info")){
    //console.log(object)
    //carrito[e.target.dataset.id]
    const producto = carrito [e.target.dataset.id]
    producto.cantidad = carrito [e.target.dataset.id].cantidad+1
    carrito [e.target.dataset.id] = {...productos}
    pintarCarrito()
}

if(e.target.classlist.contains("btn-danger")){
  const producto = carrito [e.target.dataset.id]
  producto.cantidad--
if(producto.cantidad === 0){
    delete carrito [e.target.dataset.id]
}
  pintarCarrito()
}
e.stopPropagatton()
}




