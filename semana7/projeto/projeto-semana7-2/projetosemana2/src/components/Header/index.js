import React from 'react';
import styled from 'styled-components'

const ContainerHeader = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ContButton = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-around;
`
const Header = (props) => {
    return (
        <ContainerHeader> 
            <h1> lubEFi</h1>
            <ContButton>
            <button onClick={() => props.alteraPage("playlistCreation")}>Cadastrar Playlist</button>
            <button onClick={() => props.alteraPage("playlistChange")}>Gerenciar Playlists</button>
            </ContButton>
        </ContainerHeader>
    )
}

export default Header