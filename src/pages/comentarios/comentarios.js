import React from "react";
import './comentarios.css';
import Video2 from '../../assets/video2.mp4'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Comentarios(){
    return(
        <>

        <Header></Header>
        <div id="review">
            <div class="sinopse"> 
              Veja agora nesse video abaixo os melhores comentárista do Mundo inteiro, fazendo uma review e mostrando pontos
              fortes e baixos do novo filme "Batman".
            </div>
        </div>

        <div id="video">
            <div className="conteudo">
                <video controls className="vi">
                  <source src={Video2}/>
                       Seu navegador não possui suporte para videos.
                 </video> 
            </div> 
        </div>
        <Footer></Footer>
        </>
    )

}

export default Comentarios;