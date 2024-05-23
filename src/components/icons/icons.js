import React from "react";
import './icons.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook , FaLinkedinIn, FaGithub } from "react-icons/fa";

function Icons(){
    return(
       
        <div className="Social-media">
            <i>
                <Link to= 'https://www.instagram.com/diogo_dfk/?igsh=MWFoYzBoaHNjYzlxOA%3D%3D' target="_blank" >
                <FaInstagram/>
                </Link>
                <Link to = 'https://www.facebook.com/DiogoFilipeKempczinski/' target="_blank">
                <FaFacebook />
                </Link>
                <Link to = 'https://github.com/DiogoFilipeK' target="_blank">
                <FaGithub />
                </Link>
                <Link to = 'https://www.linkedin.com/in/diogo-filipe-kempczinski-dfk/' target="_blank" >
                <FaLinkedinIn />
                </Link>
            </i>
        </div>    
        
    )
}

export default Icons;