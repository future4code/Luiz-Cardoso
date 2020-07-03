import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import PagePlaylists from './components/PagePlaylists.js';
import CriaPlaylist from './components/PageCriaPlaylist.js';

class App extends React.Component {
  state = {
    currentPage: "PageCriaPlaylist"
  }

  trocaPage = () => {
    if(this.state.currentPage === "PageCriaPlaylist"){
      this.setState({currentPage: "PagePlaylists"})
    }else {
      this.setState({currentPage: "PageCriaPlaylist"})
    }
  }
  
  render() {

    const page = this.state.currentPage === "PageCriaPlaylist" ? <CriaPlaylist /> : <PagePlaylists />


    return (
      <div className="App">
        <button onClick={this.trocaPage}>Ir para playlists feitas</button>
        {page}
      </div>
    );
  }
  }

export default App;
