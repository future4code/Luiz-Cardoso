import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaylistFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerUserCreaterName = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
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
      <PlaylistFormContainer>
          <ContainerUserCreaterName>
          <h2>Digite o nome de sua nova playlist ;)</h2>
        <input 
            type="text"
            value={this.state.name}
            placeholder="Nome da Playlist"
            onChange={this.onChangeNamePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar playlist</button>
          </ContainerUserCreaterName>
      </PlaylistFormContainer>
    );
  }
  }

export default CriaPlaylist;
