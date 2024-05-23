import React from "react";
import './footer.css';
import { Link, useNavigate } from "react-router-dom";
import Logo2 from '../../assets/Batman-Logos-Free-Picture-PNG.png';


function Footer(){
    return(

        
        <footer>
             <Link to = '/'>
             <img id="logos" src={Logo2} />
             </Link>
             <span> Todos os direitos reservados © </span>
             <span> Desenvolvido por Diogo Filipe Kempczinski</span>
             

        <nav className="footer-nav">
            <ul className="list">
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
        </footer>
    )

}

export default Footer;