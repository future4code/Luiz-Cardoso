import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/index'
import PlaylistChange from './components/PlaylistChange/';
import PlaylistCreation from './components/PlaylistCreation/';


const AppContainer = styled.div`

`


class App extends React.Component {
  state = {
    currentPage: "playlistCreation"
  }

  trocaPage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render() {

    const pageRender = () => {
      if(this.state.currentPage === "playlistCreation") {
        return <PlaylistCreation />
      } else if (this.state.currentPage === "playlistChange") {
        return <PlaylistChange />
      }
    }

    return (
      <AppContainer>
       <Header 
          alteraPage = {this.trocaPage}
       />
      {pageRender()}
      </AppContainer>
    );

  }
}

export default App;
