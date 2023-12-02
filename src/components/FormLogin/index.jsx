import { useState } from "react";
import LogoMail from "../../assets/icon_outlook.svg"
import Logo from "../../assets/logo.svg"
import Icon from "../../assets/ou_icon.svg"; 
import img_fundo from'../../assets/imagem_fundo.svg';

import './FormLogin.module.css'
const Index = () => {
    const [name, setName ] = useState('');
    const [senha, setSenha] = useState('')
    console.log(name,senha);
  return (
    <div>
        <section className="section-chamativa">
        <div className="title">
            <p className="trilhe">Trilhe o seu</p>
            <p className="caminho">caminho do sucesso </p>
            <p>Conhecimento dividido multiplica!</p>
        </div>
        <img className="imagem_fundo" src={img_fundo} alt="imagem de curso"/>
    </section>
   <section className='login'>
        <img className="logo" src={Logo}alt="Logo"/>
        <h1>Entre na sua conta:</h1>
        <div className="button-outlook">
            <img src={LogoMail} alt="icone outlook"/>
            <p>Entrar com e-mail de estudante</p>
        </div>
        <img src={Icon} alt="ou"></img>
        <form className="form_login">
            <label htmlFor="user">User:</label>
            <input type="text" placeholder="Digite seu usuario" name="user" id="user" onChange={(e)=>{setName(e.target.value)}} required />
            <label htmlFor="senha">Senha:</label>
            <input type="password" placeholder="********" id="senha" name="senha" onChange={(e)=>{setSenha(e.target.value)}} required />
            <button> entrar</button>
        </form>
   </section>
   </div>
  )
}

export default Index