import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Exercicio1 from './exercicios/01'
import Exercicio2 from './exercicios/02'

function App() {

  return (
    <>
      <h1>Exercícios de React</h1>
      <BrowserRouter>
        <ul style={{ listStyleType: 'none' /* Lista sem marcadores*/}}>
          <li><Link to="/">Página inicial</Link></li>
          <li><Link to="/01">Exercício 1</Link></li>
          <li><Link to="/02">Exercício 2</Link></li>
        </ul>

        <hr/>
        
        <div style={{ border: '1px solid blue ', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/01" element={<Exercicio1/>}/>
            <Route path="/02" element={<Exercicio2/>}/>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App