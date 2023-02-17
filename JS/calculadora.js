
let Calculadora = document.getElementById('Calculadora')

Calculadora.addEventListener('submit', calcExpenses)


function getValues() {
  let destino = document.getElementById('destino').value,
      Presupuesto = document.getElementById('Presupuesto').value,
      Transporte = document.getElementById('Transporte').value,
      Hospedaje = document.getElementById('Hospedaje').value,
      comida = document.getElementById('comida').value

  return { destino, Presupuesto,Hospedaje, Transporte,comida}    
}

function calcExpenses(e) {
  e.preventDefault();
  
  const  { destino, Presupuesto , Hospedaje, Transporte,comida } = getValues()

  let expenses = parseInt(Hospedaje) + parseInt(Transporte) + parseInt(comida)
  let balance = Presupuesto - expenses

  UI(destino, Presupuesto, balance)
}

function UI(destino, Presupuesto, balance) {
  let result = document.getElementById('result')
  let dataPrint = document.createElement('div')
  
   dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destino}</h6>
      </div>
      <div class="col s4">
        <h6>${Presupuesto}</h6>
      </div>
      <div class="col s4">
        <h6 id="balance"><strong>${balance}</strong></h6> 
      </div>
    </div>
  `
  result.appendChild(dataPrint) 

  reset()
}

function reset() {
  document.getElementById('Calculadora').reset()
}

function balanceColours() {

  const { balance} = getValues()


    if(balance < 0) {
      document.getElementById('balance').classList.add('red')
    }
    else if(balance > 0) {
      document.getElementById('balance').classList.add('green')
    }
}