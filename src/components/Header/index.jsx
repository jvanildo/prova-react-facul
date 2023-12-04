import style from './Header.module.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
const Index = () => {

    const usuario = JSON.parse(localStorage.getItem('user'))
    var nome = ''
    if (usuario) {
        nome = usuario?.name
    }

    const navigate = useNavigate();
    const sair = ()=>{ 
        navigate('/')
        localStorage.removeItem("user")
       
    }
    return (
        <nav className= {style.nav_bar}>
            <NavLink to={'/'}>
            <img className={style.logo} src={logo} alt="Logo"/>
            </NavLink>
            
            <h3 className={style.usuario}>Olá, {nome} </h3>
            
        <ul className={style.lista_link}>
            <NavLink to={"/favorito"}>
            <li className={style.favoritos}>Favoritos</li>
            </NavLink>

            <NavLink to={"/home"}>
            <li>Meus cursos</li>
            </NavLink>
        </ul>
        <button className={style.button_retirar} onClick={sair} >Sair</button>
    </nav>
    )
  }
  
  export default Index