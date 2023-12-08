import { useState } from "react";
import LogoMail from "../../assets/icon_outlook.svg";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/ou_icon.svg";
import style from "./FormLogin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const Index = () => {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [credenciaisInvalidas, setCredenciaisInvalidas] = useState(false);
  const [notUser, setNotUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("user"));
  const formFields = [
    {
      label: "User:",
      placeholder: nome,
      type: "text",
      name: "user",
      id: "user",
      onChange: (e) => {
        setName(e.target.value);
      },
    },
    {
      label: "Senha:",
      placeholder: "********",
      type: "password",
      name: "senha",
      id: "senha",
      onChange: (e) => {
        setSenha(e.target.value);
      },
    },
  ];
  var nome = "Cadastre-se para Logar";
  if (usuario) {
    nome = usuario?.name;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome == "Cadastre-se para Logar") {
      setNotUser(true);
    }
    if (name == usuario.name && senha == usuario.senha) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 4000);
    } else {
      setCredenciaisInvalidas(true);
    }
  };
  return (
    <section className={style.login}>
      <img className={style.logo} src={Logo} alt="Logo" />
      <h1 className={style.h1}>Entre na sua conta:</h1>
      <div className={style.button_outlook}>
        <img className={style.img} src={LogoMail} alt="icone outlook" />
        <p className={style.p}>Entrar com e-mail de estudante</p>
      </div>
      <img className={style.img} src={Icon} alt="ou"></img>
      {loading && (
        <>
        <div className={style.loading_overlay}>
          <PacmanLoader color="#27ABBF" size={50} />
        </div>
        </>
      )}
      {credenciaisInvalidas && (
        <p className={style.loginInvalide}>
          Usuário ou senha inválido. Tente novamente.
        </p>
      )}
      {notUser && (
        <p className={style.loginInvalide}>Primeiro faça seu cadastro !</p>
      )}
 <form className={style.form_login}>
      {formFields.map((field, index) => (
        <div key={index} className={style.container_map}>
          <label className={style.label} htmlFor={field.id}>
            {field.label}
          </label>
          <input
            className={style.input}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            id={field.id}
            onChange={field.onChange}
            required
          />
        </div>
      ))}
      <button className={style.button_entrar} onClick={handleSubmit}>
        Entrar
      </button>
    </form>
      <NavLink to={"/cadastro"}>
        <p className={style.create_count}>
          Não tem conta? crie uma de forma gratuita!
        </p>
      </NavLink>
    </section>
  );
};

export default Index;
