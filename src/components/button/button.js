import React from "react";
import './button.css';

function Button({name, active, evento, click}){   /* *evento é para estar subistituindo o onclick*/
    return(

      
        <div className="container-button">
         <button onClick={evento} className={active ? 'button' : 'disabledbutton'}>{name}</button>
            <span>Seus dados estão seguros.</span> 
        </div>   
    )
}

export default Button
