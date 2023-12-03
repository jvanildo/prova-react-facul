import { useState } from "react";
import Logo from "../../assets/logo.svg"
import style from './FormCadastro.module.css'
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
const Index = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [AreaInteresse, setAreaInteresse] = useState('');
    const cadastro = (e)=>{
        e.preventDefault();
        const objPessoa ={
            name,
            senha,
            telefone,
            AreaInteresse,
        }
       const objPessoaJson =  JSON.stringify(objPessoa);
       localStorage.setItem('user',objPessoaJson)

       const pessoaReturn = JSON.parse(localStorage.getItem('user'))
       

       objPessoa.name&&navigate('/')
       
    }

    
    return (

        <section className={style.login}>
            <img className={style.logo} src={Logo} alt="Logo" />
            <h1 className={style.h1}>Faça seu cadastro:</h1>
            <form className={style.form_login}>
                <label className={style.label} htmlFor={style.user}>Nome:</label>
                <input className={style.input} type="text" placeholder="Digite seu usuario" name="user" id="user" onChange={(e) => { setName(e.target.value) }} required />
                <label className={style.label} htmlFor="senha">Senha:</label>
                <input className={style.input} type="text" placeholder="Digite sua senha" id="senha" name="senha" onChange={(e) => { setSenha(e.target.value) }} required />
                <label className={style.label} htmlFor="confirmeSenha">Confirme sua Senha:</label>
                <input className={style.input} type="text" placeholder="Confirme sua senha" id="confirmeSenha" name="confirmeSenha" onChange={(e) => { setSenha(e.target.value) }} required />

                <div className={style.container_cad}>
                    <div className={style.label_cad}>
                        <label className={style.label_cont} htmlFor="telefone">Telefone:</label>
                        <InputMask className={style.input_cont}
                            mask="(99)99999-9999"
                            maskPlaceholder=""
                            placeholder="(99) 99999-9999"
                            id="telefone"
                            name="phone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />                    
                        </div>

                    <div className={style.label_cad}>
                        <label className={style.label_cont} htmlFor="confirmeSenha">Area de interesse:</label>
                        <select className={style.input_cont} name="" id="" onChange={(e) => { setAreaInteresse(e.target.value) }}>
                            <option value="selecione um" disabled selected>Selecione uma opção</option>
                            <option value="front-end">Front-End</option>
                            <option value="backend">Backend</option>
                            <option value="Design">Design</option>
                            <option value="Curioso">Curioso</option>
                        </select>
                    </div>
                </div>

                <button className={style.button_entrar} onClick={cadastro}>Cadastrar</button>
            </form>
        </section>
    )
}

export default Index