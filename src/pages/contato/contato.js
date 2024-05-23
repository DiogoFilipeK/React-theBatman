import React from "react";
import Header from "../../components/header/header";
import './contato.css';
import Footer from "../../components/footer/footer";
import Icons from "../../components/icons/icons";

function Contato(){
    return(

        <>
        <Header></Header>
        <div class="Pai">
        <div class="filho">Contatos:</div>
    </div>  

    <div class="container">
        <div class="elemento">
            <h3>Aqui você pode acessar as redes socias do responsável do projeto.</h3>  
             

        </div>
    </div>
        <Icons></Icons>
        <Footer></Footer>

        </>
       

    )

}

export default Contato;