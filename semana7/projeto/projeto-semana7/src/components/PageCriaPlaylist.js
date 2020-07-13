import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const axiosConfig = {
    headers: {
    Authorization: "luiz-bombonatti-turing"
    }
}

class CriaPlaylist extends React.Component {
    state = {
        name: ""
    }

    onChangeNamePlaylist = (e) => {
        this.setState({name: e.target.value})
    }
    
    createPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        body,
        axiosConfig
        ).then(() => {
            alert("Playlist criada com sucesso!")
            this.setState({name: ""})
        }).catch(err => {
            console.log(err.message)
        })
    }

  render() {
    return (
      <div className="App">
          <p>Crie sua nova playlist ;)</p>
        <input 
            type="text"
            value={this.state.name}
            placeholder="Crie uma nova playlist"
            onChange={this.onChangeNamePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar playlist</button>
      </div>
    );
  }
  }

export default CriaPlaylist;
