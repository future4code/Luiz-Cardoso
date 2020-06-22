import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img className="loguinho" src={props.imagem}/>
            <div className="parteText">
            <p>{props.topico}</p>
            <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardPequeno;