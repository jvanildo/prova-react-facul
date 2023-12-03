import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {

  return <div className='body'>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
