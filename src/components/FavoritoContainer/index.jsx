import { useState,useEffect } from "react";
import style from "./FavoritoContainer.module.css";

const Index = () => {
  const [videos, setVideos] = useState([]);
  const [novoVideo, setNovoVideo] = useState({
    link: "",
    title: "",
    descricao: "",
  });

  const adicionarVideo = () => {
    if (novoVideo.link && novoVideo.title && novoVideo.descricao) {
      setVideos([...videos, novoVideo]);
      setNovoVideo({ link: "", title: "", descricao: "" });
    } else {
      // Handle invalid input, e.g., show an error message
    }
  };

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const limparLista = () => {
    setVideos([]);
  };

  const listExemplos = [
    {
      link: "https://www.youtube.com/embed/iF2MdbrTiBM?si=E6CWOQ360nxZsJTK",
      title: "Lógica de programação ",
      descricao: "Duração: 3 Horas",
    },
    {
      link: "https://www.youtube.com/embed/lx0eir2xF5E?si=6ConhbgVrgjkEEo7",
      title: "Eu sou DEV-JR",
      descricao: "1 minuto",
    },
    {
      link: "https://www.youtube.com/embed/PuyZAUyZYDI?si=g5-J_QVT7v7VmCxC",
      title: "Html e css - basic",
      descricao: "Duração: 3 Horas",
    },
  ];

  return (
    <div className={style.container_bodyfavorito}>
      <div className={style.container_addVideo}>
        <div className={style.containerCardInput}>
          <div className={style.container_inputs}>
            <label className={style.label}>Link do video</label>
            <textarea
              value={novoVideo.link}
              onChange={(e) =>
                setNovoVideo({ ...novoVideo, link: e.target.value })
              }
              className={style.textArea}
            />
          </div>
          <div className={style.container_inputs}>
            <label className={style.label}>Título:</label>
            <input
              type="text"
              value={novoVideo.title}
              onChange={(e) =>
                setNovoVideo({ ...novoVideo, title: e.target.value })
              }
              className={style.input}
            />
          
          <div className={style.container_inputs}>
            <label className={style.label}>Duração:</label>
            <input
              type="text"
              value={novoVideo.descricao}
              onChange={(e) =>
                setNovoVideo({ ...novoVideo, descricao: e.target.value })
              }
              className={style.input}
            />
            </div>
          </div>
          <div className={style.container_button}>
            <button onClick={adicionarVideo} className={style.button_add}>
              Adicionar Video
            </button>
            <button onClick={limparLista} className={style.button_retirar}>
              Limpar Lista
            </button>
          </div>
        </div>
            <h3 className={style.exe_fun}>Exemplos para testar a funcionalidade:</h3>
      <div className={style.container_listExemplo}>
        {listExemplos.map((videoEx, index) => (
          <div key={index} className={style.container_obj}>
            <p className={style.label_map}>
              Link: <span className={style.text_map}>{videoEx.link}</span>
            </p>
            <p className={style.label_map}>
              Titulo: <span className={style.text_map}>{videoEx.title}</span>
            </p>
            <p className={style.label_map}>
              Duração:{" "}
              <span className={style.text_map}>{videoEx.descricao}</span>
            </p>
          </div>
        ))}
      </div>
      </div>
      <section className={style.container_videos}>
        {videos.map((video, index) => (
          <div key={index} className={style.container_video}>
            <div className={style.video}>
              <iframe
                width="300"
                height="200"
                src={video.link || ""}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={style.descricao}>
              <p>{video.title}</p>
              <p>{video.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;
