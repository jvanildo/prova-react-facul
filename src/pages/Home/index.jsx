import Header from '../../components/Header'
import BodyHome from '../../components/BodyHome'

import style from './Home.module.css'
const index = () => {
   
    return (
      <div className={style.body}>
        
        <Header/>
         
        <BodyHome/>
       
        </div>
    )
  }
  
  export default index