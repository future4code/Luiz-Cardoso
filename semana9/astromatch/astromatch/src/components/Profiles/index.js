import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Clear from '@material-ui/icons/Clear';

const MainContainer = styled.div`
    width: 69%;
    height: 100%;   
    background-color: white;
    padding: 16px;
    border: 1px solid black;
    border-radius: 10px; 
` 
const CardPerson = styled.div`
    width: 75%;
    height: 90%;
    background-image: url(${props => props.photo});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    >h2 {
        color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    
`

const BioPerson = styled.div`
    justify-content: flex-start;
    width: 100%;

    > h1 {
        color: black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
    }

    
`
const ContainerButton = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px;
` 

const LikeButton = styled.button`
        border-radius: 50%;
        background: black;
        color: white;
        width: 70px;
        height: 70px;
        background-color: green;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        outline: none;
        :hover{ 
            background-color: #57CF55;
            transform: translate3d(2%, -2%, 0) scale3d(2, 2, 2);
        }
        :active{ 
            border: none;
        }
`

const DeslikeButton = styled.button`
        border-radius: 50%;
        background: black;
        color: white;
        width: 70px;
        height: 70px;
        background-color: red;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        outline: none;
        :hover{ 
            background-color: #C37166;
            transform: translate3d(2%, -2%, 0) scale3d(2, 2, 2);
        }
`

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
        alert("Você deu deslike nessa pessoa");
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
            alert("Você curtiu essa pessoa");
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