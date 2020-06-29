import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
padding-top: 15vh;
background-color: #86A9CC;
height: 85vh;
`

const Button = styled.button`
margin-top: 25px;
border-radius: 8px;
`


class App extends React.Component {
  state = {
    etapa: 1,
  }
   renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
      return <Etapa1 />;
      case 2: 
      return <Etapa2 />;
      case 3:
      return <Etapa3 />;
      default:
        return <Etapa4 />
    }
  }

  onClickPassPage = () =>{
    this.setState({
      etapa: this.state.etapa +1
    })
  }

  render(){
    return (
      <DivPrincipal>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 ? <Button onClick={this.onClickPassPage}>Proxima etapa</Button> : ""}
      </DivPrincipal>
    );
  }
}

export default App;
