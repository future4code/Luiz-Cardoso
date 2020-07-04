import React from 'react';
import CadastroUsuarios from './components/CadastroUsuarios.js';
import ListaUser from './components/ListaUser.js';
import styled from "styled-components"

const ContainerFather = styled.div`
height: 100vh;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0E8696;
`
const ButtonPage = styled.button`
border-radius: 5px;
background-color: #0D188C;
`

class App extends React.Component {
  state = {
    currentPage: "cadastroUsuarios"
  }

  changePage = () => {
    if(this.state.currentPage === "cadastroUsuarios"){
      this.setState({currentPage: "listaUser"})
    } else {
      this.setState({currentPage: "cadastroUsuarios"})
    }
  }

  render(){
    const page = this.state.currentPage === "cadastroUsuarios" ? <CadastroUsuarios /> : <ListaUser />
    return (
      <ContainerFather> 
        <div>
        <ButtonPage onClick={this.changePage}>Trocar de página</ButtonPage>
        {page}
        </div>
      </ContainerFather>  
    );
  }
}

export default App;
