import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import PagePlaylists from './components/Playlists/PagePlaylists';
import PageCriaPlaylist from './components/PlaylistCreationPage/PageCriaPlaylist';
import Header from './components/Header/Header';
import ManagerPlaylist from './components/PlaylistManagePage/ManagerPlaylist';
import Details from './components/Details/DetailPlaylist'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: gray;
`
class App extends React.Component {
  state = {
    currentPage: "PageCriaPlaylist"
  }

  trocaPage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render() {
    const page = () => {
      if(this.state.currentPage === "PageCriaPlaylist"){
        return <PageCriaPlaylist/>
      } else if(this.state.currentPage === "PagePlaylists") {
        return <PagePlaylists />
      }
    }


    return (
      <AppContainer>
        <Header 
          pageChange ={this.trocaPage}
        />
        {page()}
      </AppContainer>
    );
  }
  }

export default App;
