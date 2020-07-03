import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const axiosConfig = {
    headers: {
    Authorization: "luiz-bombonatti-turing"
    }
}

class PagePlaylists extends React.Component {
    state = {
        playlistCriadas: [
            {
                id: "1",
                name: "lubezinho"
            },
            {
                id: "2",
                name: "xarabalas"
            }
        ]
    }

    componentDidMount = () => {
        this.mostrarPlaylist()
    }

    mostrarPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
        .then(response => {
            console.log(response.data)
            this.setState({playlistCriadas: response.data})
        }).catch(err => {
            console.log(err.message)
        })
    }
  
  render() {
    return (
      <div className="App">
        <p> Listas que você criou: </p>
        <hr />
        {this.state.playlistCriadas.map(playlist => {
            return <ul>
                <li key={playlist.id}> {playlist.name} </li>
                <button>Excluir playlist</button>
            </ul>
        })}
      </div>
    );
  }
  }

export default PagePlaylists;
