import FormLogin from '../../components/FormLogin'
import LoginImage from '../../components/LoginImage'
import style from './Login.module.css'
const index = () => {
    return (
      <div className={style.body}>
        <LoginImage/>
        <FormLogin/>
      </div>
    )
  }
  
  export default index