import React from 'react'
import Adicao from './components/Adicao'
import Subitracao from './components/Subitracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App =() => {
  return (
    <div>
      <Adicao num1={4} num2={6}/>
      <Subitracao num1={10} num2={6}/>
      <Multiplicacao num1={10} num2={10}/>
      <Divisao num1={10} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia= "Java"/>

      
    </div>
  )
}

export default App