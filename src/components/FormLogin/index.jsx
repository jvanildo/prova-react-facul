import { useState } from "react";
import LogoMail from "../../assets/icon_outlook.svg"
import Logo from "../../assets/logo.svg"
import Icon from "../../assets/ou_icon.svg"; 
import style from './FormLogin.module.css'
import { Link, useNavigate } from "react-router-dom";
const Index = () => {
    const [name, setName ] = useState('');
    const [senha, setSenha] = useState('')
    const navigate = useNavigate();
    
    const usuario = JSON.parse(localStorage.getItem('user'))
    console.log(usuario);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (name && senha) {
            navigate('/home') 
        }
        const objPessoa ={
            name,
            senha,
            telefone:'',
            AreaInteresse:'dev',
        }
       const objPessoaJson =  JSON.stringify(objPessoa);
       localStorage.setItem('user',objPessoaJson)
    }
  return (
   
        <section className={style.login}>
        <img className={style.logo} src={Logo}alt="Logo"/>
        <h1 className={style.h1}>Entre na sua conta:</h1>
        <div className={style.button_outlook}>
            <img className={style.img} src={LogoMail} alt="icone outlook"/>
            <p className={style.p}>Entrar com e-mail de estudante</p>
        </div>
        <img className={style.img} src={Icon} alt="ou"></img>
        <form className={style.form_login} >
            <label className={style.label} htmlFor={style.user}>User:</label>
            <input className={style.input} type="text" placeholder={usuario.name} name="user" id="user"  onChange={(e)=>{setName(e.target.value)}} required />
            <label className={style.label} htmlFor="senha">Senha:</label>
            <input className={style.input} type="password" placeholder="********" id="senha" name="senha" onChange={(e)=>{setSenha(e.target.value)}} required />
            <button className={style.button_entrar} onClick={handleSubmit}> Entrar</button>
           
        </form>
        </section>
  )
}

export default Index