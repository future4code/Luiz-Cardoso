import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {CardMatches, CardViewMatches, ImgMatch, ButtonDelete} from './style';
import Delete from '@material-ui/icons/Delete'


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
                  <span>{match.name && <p> {match.name}, {match.age}</p>}</span>
              </CardViewMatches>
          )
      })}  
      
      <ButtonDelete onClick={LimpaMatches}>
          <Delete />
      </ButtonDelete>

    </CardMatches>
  );
}