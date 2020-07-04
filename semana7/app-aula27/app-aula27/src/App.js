import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Main = styled.div`
display: flex;
justify-content: center;
`


export class App extends React.Component {
  state = {
    pokeList: [],
    imagemPoke: ""
  }

  componentDidMount = () => {
    this.mostraPokemons()
  }


  mostraPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=964").then(response => {
      console.log(response.data.results)
      this.setState({pokeList: response.data.results})
    }).catch(err => {
      console.log(err.message)
    })
  }

  mudaPoke = (event) => {
    const selectPoke = event.target.value

    axios.get(`https://pokeapi.co/api/v2/pokemon/${selectPoke}`).then(response => {
      console.log(response.data.sprites.front_default)
      this.setState({imagemPoke: response.data.sprites.front_default})
    }).catch(err => {
      console.log(err.message)
    })
  }

  render() {
    return (
      <div>
        <Main>
          <select onChange={this.mudaPoke}>
            <option value={""}>Escolha seu pokemon!</option>
            {this.state.pokeList.map(pokemon => {
              return <option key={pokemon.name} value={pokemon.name}> 
              {pokemon.name}
              </option>
            })}
          </select>
            <div>
              <img src={this.state.imagemPoke} alt="Pokemon"/>  
            </div>
        </Main>
      </div>
    );
  }
}

export default App;
