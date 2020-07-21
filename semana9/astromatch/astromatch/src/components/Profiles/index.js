import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Clear from '@material-ui/icons/Clear';
import {MainContainer,CardPerson, BioPerson, ContainerButton, DeslikeButton, LikeButton} from './style'



const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-bombonatti-turing"

export default function Profiles(props) {
    const photo = props.photo
    
    const ButtonDeslike = () => {
        const body = {
            id: props.person.id,
            choice: false
    }

    axios.post(`${baseUrl}/choose-person`, body)
    .then(() => {
        alert(`Você deu deslike em ${props.person.name}`);
        props.getPerson();
    }).catch(e => { 
        console.log(e.message)
    })
    }

    const ButtonLike = () => {
        const body = {
                id: props.person.id,
                choice: true
        }

        axios.post(`${baseUrl}/choose-person`, body)
        .then(() => {
            alert(`Você curtiu ${props.person.name}`);
            props.getPerson();
        }).catch(e => { 
            console.log(e.message)
        })
    }

  return (

    <MainContainer>
        <CardPerson photo={photo}>
        {props.person.name && <h2> {props.person.name}, {props.person.age}</h2>}
        <BioPerson>
            <h1>{props.person.bio}</h1>
        </BioPerson>
        </CardPerson>
        <br />
        <hr/>
        <ContainerButton>
        <DeslikeButton onClick={ButtonDeslike}>
            <Clear />
        </DeslikeButton>
        <LikeButton onClick={ButtonLike}>
            <FavoriteBorder />
        </LikeButton>
        </ContainerButton>
    </MainContainer>
  );
}