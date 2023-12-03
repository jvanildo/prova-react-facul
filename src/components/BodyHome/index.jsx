import style from './BodyHome.module.css'
const index = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const listVideos = [
        {
            link: 'https://www.youtube.com/embed/iF2MdbrTiBM?si=E6CWOQ360nxZsJTK',
            title: 'Lógica de programação ',
            descricao: 'Duração: 3 Horas'
        },
        {
            link: "https://www.youtube.com/embed/videoseries?si=QU8iSztJkpK2919H&amp;list=PLpdAy0tYrnKyjrY1Fr72DhmrRmeWI_5C8",
            title: 'Python (automação)',
            descricao: '20 minutos'
        },
        {
            link: 'https://www.youtube.com/embed/PuyZAUyZYDI?si=g5-J_QVT7v7VmCxC',
            title: 'Html e css - basic',
            descricao: 'Duração: 3 Horas'
        },
        {
            link: "https://www.youtube.com/embed/videoseries?si=l-qX2vL7WA3A0_2V&amp;list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B",
            title: "Node.js - intermediario",
            descricao: 'Duração: 30 Horas'
        },
        {
            link: "https://www.youtube.com/embed/videoseries?si=cyKqeKo4_Wg6Jy5v&amp;list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO",
            title: 'React - Básico ao avançado',
            descricao: 'Duração: 22 Horas'

        },
        {
            link: 'https://www.youtube.com/embed/nQHRUoodDIY?si=dTYUJEM9NtZv9UcG',
            title: 'Metodologia ágil',
            descricao: 'Duração: 4 Horas'
        }
    ]
    return (
        <main className={style.body_cursos}>
            <h3 className={style.interesse}>Seu interesse: <span className={style.objInteresse}>{user.AreaInteresse.toUpperCase()
            }</span></h3>
            <section className={style.container_videos}>

                {listVideos.map((video) => {
                    return (


                        <div className={style.container_video}>
                            <div className={style.video}>
                                <iframe width="300" height="200" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className={style.descricao}>
                                <p>{video.title}</p>
                                <p>{video.descricao}</p>
                            </div>
                        </div>

                    )
                })}
            </section>
        </main>
    )
}

export default index