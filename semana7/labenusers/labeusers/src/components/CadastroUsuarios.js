import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


class CadastroUsuarios extends React.Component {
    state = {
        nomesCriados: [],
        inputNome: "",
        inputEmail: ""
    }

    pegaUsuario = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "luiz-bombonatti-turing"
            }
        }).then(response => {
            this.setState({nomesCriados: response.data})
        }).catch(error =>{
            console.log(error.data)
        })
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
        }).then(response => {
            this.setState({inputNome: '', inputEmail: '',})
            alert("Usuario criado com sucesso!")
        }).catch(error => {
            console.log(error.data)
        })
    }

    apagaUser = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
                Authorization: "luiz-bombonatti-turing"
            }
        }).then(response => {
            this.pegaUsuario();
            alert("Usuario deletado com sucesso")
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
      <div >
        <div>
            <button onClick={this.pegaUsuario}>Ir para página de lista</button>
            <div>
                <label>Nome:</label>
                <input 
                    value={this.state.inputNome}
                    onChange={this.onChangeNomeValue}
            />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmailValue}
                />
                <div>
                    <button onClick={this.criarUsuario}> Salvar </button>
                    {this.state.nomesCriados.map(list => {
                        return <p>
                            {list.name}
                            <button onClick={() => this.apagaUser(list.id)}>Delete </button>
                        </p>
                        
                    })}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CadastroUsuarios;
