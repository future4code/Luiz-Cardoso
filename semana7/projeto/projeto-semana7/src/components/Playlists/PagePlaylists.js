import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const PagePlaylistContainer = styled.div`

`

const axiosConfig = {
    headers: {
    Authorization: "luiz-bombonatti-turing"
    }
}

class PagePlaylists extends React.Component {
    state = {
        playlistCriadas: []
    }

    componentDidMount = () => {
        this.mostrarPlaylist()
    }

    mostrarPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
        .then(response => {
            console.log(response.data)
            this.setState({playlistCriadas: response.data.result.list})
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    excluiPlaylist = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${userId}`, 
        axiosConfig
        ).then(() => {
            alert("Usuário deletado")
            this.mostrarPlaylist()
        }).catch(e => {
            console.log(e.message)
        })
    }

  render() {
    return (
      <PagePlaylistContainer>
        <p> Listas que você criou: </p>
        <hr />
        {this.state.playlistCriadas.length === 0 && <div>carregando ...</div>}
        {this.state.playlistCriadas.map(playlist => {
            return (
                <ul>
                <li key={playlist.id}> {playlist.name   } </li>
                <button onClick={() => {this.excluiPlaylist(playlist.id)}}>Excluir playlist</button>
            </ul>
            ) 
        })}
      </PagePlaylistContainer>
    );
  }
  }

export default PagePlaylists;
