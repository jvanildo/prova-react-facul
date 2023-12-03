import style from './LoginImage.module.css'
import img_fundo from'../../assets/imagem_fundo.svg';
const index = () => {
    return (
        <section className={style.section_chamativa} >
        <div className={style.title}>
            <p className={style.trilhe}>Trilhe o seu</p>
            <p className={style.caminho}>caminho do sucesso </p>
            <p>Conhecimento dividido multiplica!</p>
        </div>
        <img className={style.imagem_fundo} src={img_fundo} alt="imagem de curso"/>
        </section>
    )
  }
  
  export default index