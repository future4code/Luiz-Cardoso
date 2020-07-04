import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ApagaUser = styled.button`
color: red;
`

const ContainerCorpo = styled.div`
border: 1px black solid;
`


const axiosConfig = {
  headers: {
    Authorization: "luiz-bombonatti-turing"
  }
}

class ListaUserPage extends React.Component {
  state = {
    listaUser: []
  }
  
  componentDidMount = () => {
    this.mostraUsuario();
  }

  mostraUsuario = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    axiosConfig,
    ).then(response => {
        this.setState({listaUser: response.data})
    }).catch(error =>{
        console.log(error.data)
    })
}

  apagaUsuario = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, 
    axiosConfig,
    ).then(() => {
        this.mostraUsuario();
        alert("Usuario deletado com sucesso")
    }).catch(error => {
        console.log(error.data)
    })
  }
    render(){

    return (
      <ContainerCorpo>
        <h3>Usuarios Salvos:</h3>
        {this.state.listaUser.length === 0 && <div>Carregando...</div>}
        {this.state.listaUser.map(user =>{
          return <ul> 
            <li>{user.name}</li>
            <ApagaUser onClick={() => {this.apagaUsuario(user.id)}}>X</ApagaUser>
          </ul>
        })}
      </ContainerCorpo>  
    );
  }
}

export default ListaUserPage;
