import React from "react"
import styled from 'styled-components'

const Titulo = styled.h1`
margin: 0;
`

class Etapa3 extends React.Component{
    render(){
        return(
        <div>
            <Titulo> Etapa 3 - Informações Gerais de Ensino</Titulo>
            <div>
                <p>6. Por que você não terminou um curso de graduação? </p>
                <input type="text"></input>
                <p>7. Você fez algum curso complementar?</p>
                <select>
                    <option value="nenhum">Nenhum</option>
                    <option value="Curso Tecnico">Curso Técnico</option>
                    <option value="Curso Ingles">Curso de Ingles</option>
                </select>
                </div>
        </div>
        )
    }
}

export default Etapa3