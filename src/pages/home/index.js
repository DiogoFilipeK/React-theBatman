import React from "react";
import Header from "../../components/header/header";
import './styless.css';
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";

function Home(){
 
    return(
        <>
            <Header/>
            <div id="banner"></div>
            <div id="trailler-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video}/>
                        Seu navegador não possui suporte para videos.
                    </video>  
                    <div id="sinopse">
                        <p className="description">
                            Após dois anos espreitando as ruas como Batman, 
                            Bruce Wayne se encontra nas profundezas mais sombrias 
                            de Gotham City. Com poucos aliados confiáveis, o vigilante 
                            solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className="button"> Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Cards></Cards>
            <Footer></Footer>

            

        </>
   
    )

}

export default Home;