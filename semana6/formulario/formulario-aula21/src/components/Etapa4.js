import React from "react"
import styled from 'styled-components'

const Titulo = styled.h2`
margin: 0;
`

class Etapa4 extends React.Component{
    render(){
        return(
        <div>
            <Titulo> O FORMULÁRIO ACABOU</Titulo>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </div>
        )
    }
}

export default Etapa4