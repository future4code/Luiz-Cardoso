import React from 'react';
import styled from 'styled-components'
import Playlists from '../components/Playlists';
import DetailsPlaylist from '../components/Details'

const ContainerChange = styled.div`
`

class PlaylistChange extends React.Component {
    state = { 

    }

    render() {
        return (
            <ContainerChange> 
                <Playlists />
                <DetailsPlaylist />
            </ContainerChange>
        )
    }
}

export default PlaylistChange;