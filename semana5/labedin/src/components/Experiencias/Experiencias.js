import React from 'react';
import './Experiencias.css'

function Experiencias(props) {
    return (
        <div className="experiencias">
            <p>{props.texto}</p>
            <br></br>
        </div>
    )
}
export default Experiencias