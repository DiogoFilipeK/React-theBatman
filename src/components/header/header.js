import React, { } from "react";
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Batman-Logos-Free-Picture-PNG.png';


function Header(){

    return(
        
        <header>
            <Link to = '/'>
            <img id="logo" src={Logo} />
            </Link>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to = '/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to = '/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to = '/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to = '/comentarios'>
                    <li>Comentarios</li>
                    </Link>
                    
                </ul>
            </nav>
        </header>

        
    )
}

export default Header;