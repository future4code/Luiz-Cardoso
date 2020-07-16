import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardMatches = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction: column;
`

const CardViewMatches = styled.div`
    width: 70%;
    height: 70%; 
    display: flex;
    align-items: center;   
    background-color: gray;
    justify-content: center;
`

const ImgMatch = styled.img`
    width: 5%;
    border-radius: 100px;
    height: 50px;
    padding: 15px;
`
const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-bombonatti-turing"

export default function AllMacthes() {
    const [userMatches, setMatches] = useState([]);

    const getMatches = () => {
        axios.get(`${baseUrl}/matches`)
        .then((response) => {
            setMatches(response.data.matches)
        }).catch(e => {
            console.log(e.message)
        })
        
    }
    console.log(userMatches)
    
    const LimpaMatches = () => {
        let pergunta = window.confirm("Deseja limpar os matches?")

            if(pergunta === true){
                axios.put(`${baseUrl}/clear`)
                .then(() => {
                    getMatches();
                }).catch( e => {
                    console.log(e.message)
                })
            }
        
    }
    
    useEffect(() => {
        getMatches()
    }, [])

    
  return (
      
    <CardMatches>
      {userMatches.map(match => {
          return (
              <CardViewMatches key={match.id}>
                  <ImgMatch src={match.photo}/>
                  <span>{match.name}</span>
              </CardViewMatches>
          )
      })}
      <button onClick={LimpaMatches}>Limpar Matches</button>

    </CardMatches>
  );
}