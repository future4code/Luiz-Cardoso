import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerBody = styled.div`
margin: 0 auto;
height: 30px;
`
const ContainerMedio = styled.div`
display: flex;
`

const Salvar = styled.div`
`


class CadastroUsuarios extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    criarUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body , {
            headers: {
                Authorization: "luiz-bombonatti-turing"
            }
        }).then(() => {
            this.setState({inputNome: '', inputEmail: '',})
            alert("Usuario criado com sucesso!")
        }).catch(error => {
            console.log(error.data)
        })
    }
    
    onChangeNomeValue = event =>{
        this.setState({inputNome: event.target.value})
    }
    
    onChangeEmailValue = event => {
        this.setState({inputEmail: event.target.value})
    }

  render(){
    return (
      <ContainerMedio >
            <ContainerBody>
                <label>Nome: </label>
                <input 
                    type="text"
                    value={this.state.inputNome}
                    onChange={this.onChangeNomeValue}
                    placeholder="Nome do Usuario"
                />
            </ContainerBody>
            <ContainerBody>
                <label>Email: </label>
                <input 
                    type="text"
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmailValue}
                    placeholder="Endereço de Email"
                />
                <Salvar>
                    <button onClick={this.criarUsuario}> Salvar </button>
                </Salvar>
            </ContainerBody>
      </ContainerMedio>
    );
  }
}

export default CadastroUsuarios;
