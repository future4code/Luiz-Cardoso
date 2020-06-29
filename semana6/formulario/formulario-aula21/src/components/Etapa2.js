import React from "react"
import styled from 'styled-components'

const Titulo = styled.h1`
margin: 0;
`

class Etapa2 extends React.Component{
    render(){
        return(
        <div>
            <Titulo> Etapa 2 - Informações do Ensino Superior</Titulo>
            <div>
                <p>5. Qual curso?</p>
                <input type="text"></input>
                <p>6. Qual a unidade de ensino?</p>
                <input type="text"></input>
                </div>
        </div>
        )
    }
}

export default Etapa2