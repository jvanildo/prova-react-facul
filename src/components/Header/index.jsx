import style from './Header.module.css'
import logo from '../../assets/logo.svg'
const index = () => {
    const usuario = JSON.parse(localStorage.getItem('user'))
    return (
        <nav className= {style.nav_bar}>
            <img className={style.logo} src={logo} alt="Logo"/>
            <h3 className={style.usuario}>Olá, {usuario.name.toUpperCase()} </h3>
        <ul className={style.lista_link}>
            <li className={style.favoritos}>Favoritos</li>
            <li>Meus cursos</li>
        </ul>
    </nav>
    )
  }
  
  export default index