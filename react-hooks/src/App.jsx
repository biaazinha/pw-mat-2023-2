import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Exercicio1 from './exercicios/01'
import Exercicio2 from './exercicios/02'
import Exercicio3 from './exercicios/03'
import Exercicio4 from './exercicios/04'
import Exercicio5 from './exercicios/05'
import Exercicio6 from './exercicios/06'

function App() {

  return (
    <>
      <h1>Exercícios de React</h1>
      <BrowserRouter>
        <ul style={{ listStyleType: 'none' /* Lista sem marcadores*/}}>
          <li><Link to="/">Página inicial</Link></li>
          <li><Link to="/01">Exercício 1</Link></li>
          <li><Link to="/02">Exercício 2</Link></li>
          <li><Link to="/03">Exercício 3</Link></li>
          <li><Link to="/04">Exercício 4</Link></li>
          <li><Link to="/05">Exercício 5</Link></li>
          <li><Link to="/06">Exercício 6</Link></li>
        </ul>

        <hr/>
        
        <div style={{ border: '1px solid blue ', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/01" element={<Exercicio1/>}/>
            <Route path="/02" element={<Exercicio2/>}/>
            <Route path="/03" element={<Exercicio3/>}/>
            <Route path="/04" element={<Exercicio4/>}/>
            <Route path="/05" element={<Exercicio5/>}/>
            <Route path="/06" element={<Exercicio6/>}/>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App