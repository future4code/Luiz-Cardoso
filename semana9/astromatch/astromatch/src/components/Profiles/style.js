import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 40%;
    height: 80%;   
    background-color: white;
    padding: 50px;
    border: 1px solid black;
    border-radius: 10px; 
` 

export const CardPerson = styled.div`
    width: 90%;
    height: 80%;
    background-image: url(${props => props.photo});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    border-radius: 15px;
    >h2 {
        color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    
`

export const BioPerson = styled.div`
    justify-content: flex-start;
    width: 100%;

    > h1 {
        color: black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
    }

    
`
export const ContainerButton = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 40px;
` 

export const LikeButton = styled.button`
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

export const DeslikeButton = styled.button`
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
