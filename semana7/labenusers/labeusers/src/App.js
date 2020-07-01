import React from 'react';
import CadastroUsuarios from './components/CadastroUsuarios.js';
import ListaUser from './components/ListaUser.js';
import styled from "styled-components"

const ContainerFather = styled.div`
height: 50vh;
width: 50%;
margin: 0 auto;
display:flex;
`

const MudarPage = styled.div`
margin: 8px;
padding: 0px;
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
        <MudarPage>
        <button onClick={this.changePage}>Trocar de página</button>
        </MudarPage>
        {page}
      </ContainerFather>  
    );
  }
}

export default App;
