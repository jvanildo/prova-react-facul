import FormCadastro from '../../components/FormCadastro'
import LoginImage from '../../components/LoginImage'
import style from './Cadastro.module.css'
const index = () => {
  return (
    <div className={style.body}>
      <LoginImage />
      <FormCadastro />
      </div>
  )
}

export default index