import React from "react";
import { } from "react-router-dom";
import './fotos.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Fotos(){
    return(

        <>
        <Header></Header>
        <div class="actor-cards">
            <div class="cards-content">
             <div class="card banner-1">Paul Dano - Riddler</div>
             <div class="card banner-2">Colin Farrell - Pinguim</div>
             <div class="card banner-3">Janine Harouni - Carla</div>
             <div class="card banner-4">Andy Serkis - Alfred Pennyworth</div>
             <div class="card banner-5">John Turturro - Carmine Falcone</div>
             <div class="card banner-6">Jayme Lawson - Bella Reál</div>
            </div>
        </div>
        <Footer></Footer>
        
        
        </>
        

       

        
        
        
       
    )

}

export default Fotos;