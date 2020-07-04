import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerBody = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
margin: 0 auto;
justify-content: space-between;
`


const ContainerMedio = styled.div`
display: flex;
border: 1px solid black;
height: 20vh;
width: 20vw;
margin: 0 auto; 
background-color: #263300;
`

const InputName = styled.input`
height: 30px;
width: 200px;
margin: 4px;
`

const InputEmail= styled.input`
height: 30px;
width: 200px;
margin: 4px;
`

const ButtonSave = styled.button`
background-color: green;
border-radius: 10px;
margin: 10px;
padding: 2px;
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
      <ContainerMedio>
            <ContainerBody>
                <label>Nome: </label>
                <InputName 
                    type="text"
                    value={this.state.inputNome}
                    onChange={this.onChangeNomeValue}
                    placeholder="Nome do Usuario"
                />
                <label>Email: </label>
                <InputEmail 
                    type="text"
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmailValue}
                    placeholder="Endereço de Email"
                />
                    <ButtonSave onClick={this.criarUsuario}> Salvar </ButtonSave>
            </ContainerBody>
      </ContainerMedio>
    );
  }
}

export default CadastroUsuarios;
