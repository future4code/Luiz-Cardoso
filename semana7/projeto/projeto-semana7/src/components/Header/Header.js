import React from 'react';
import styled from 'styled-components';
import ManagerPlaylist from './components/PlaylistManagePage/ManagerPlaylist';
import axios from 'axios'


const ContainerHeader = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ContainerButton = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
`
const Header = (props) => {
    return (
        <ContainerHeader>
            <h1> lubEFi</h1>    
            <ContainerButton> 
            <button onClick={() => props.pageChange("PageCriaPlaylist")}>Criar playlist</button>
            <button onClick={() => props.pageChange("PagePlaylists")}>Gerenciar Playlist</button>
            </ContainerButton>
        </ContainerHeader>
    )
}

export default Header;