import React from "react"
import styled from 'styled-components'

const DivEtapa1 = styled.div`
margin: 0 auto;
`
const Titulo = styled.h1`
margin: 0;
`

class etapa1 extends React.Component{
    render(){
        return(
        <DivEtapa1>
            <Titulo> Etapa 1 - Dados Gerais</Titulo>
            <div>
                <p>1. Qual seu nome?</p>
                <input type="text"></input>
                <p>2. Qual sua idade?</p>
                <input type="text"></input>
                <p>3. Qual seu email?</p>
                <input type="text"></input>
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option value="Ensino Medio Incompleto"> Ensino Médio Incompleto</option>
                    <option value="Ensino Medio Completo"> Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto"> Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo"> Ensino Superior Completo</option>
                </select>
                </div>

        </DivEtapa1>
        )
    }
}

export default etapa1