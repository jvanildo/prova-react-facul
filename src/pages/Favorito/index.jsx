import Header from '../../components/Header'
import FavoritoContainer from '../../components/FavoritoContainer'

import style from './Home.module.css'
const index = () => {
    
    return (
      <div className={style.body}>
        
        <Header/>
         
        <FavoritoContainer/>
       
        </div>
    )
  }
  
  export default index