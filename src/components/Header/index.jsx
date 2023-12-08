import style from './Header.module.css'
import React from 'react'
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
    const navLinks = [
        { to: '/', label: 'Home', className: style.logo, isLogo: true },
        { to: '/favorito', label: 'Favoritos', className: style.favoritos },
        { to: '/home', label: 'Meus cursos' },
      ];
    return (
        <nav className={style.nav_bar}>
        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.isLogo ? (
              <NavLink to={link.to}>
                <img className={link.className} src={logo} alt="Logo" />
              </NavLink>
            ) : (
              <NavLink to={link.to}>
          
              </NavLink>
            )}
          </React.Fragment>
        ))}
        <h3 className={style.usuario}>Olá, {nome} </h3>
        <ul className={style.lista_link}>
          {navLinks
            .filter((link) => !link.isLogo)
            .map((link, index) => (
              <NavLink key={index} to={link.to}>
                <li>{link.label}</li>
              </NavLink>
            ))}
        </ul>
        <button className={style.button_retirar} onClick={sair}>
          Sair
        </button>
      </nav>
    );
  };
  
  export default Index