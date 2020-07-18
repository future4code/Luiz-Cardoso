import styled from 'styled-components';


export const CardMatches = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction: column;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
`

export const CardViewMatches = styled.div`
    width: 100%;
    height: 70%; ;
    display: flex;
    align-items: center;   
    justify-content: center;
`

export const ImgMatch = styled.img`
    width: 5%;
    border-radius: 100px;
    height: 70%;
    padding: 15px;
`

export const ButtonDelete = styled.button`
    border-radius: 100px;
    border: 1px red solid;
    outline: none; 
    cursor: pointer;
    margin-top: 50px;

    :hover{
        transform: translate3d(0%, -0%, 0) scale3d(1.5, 1.5, 1.5);
    }
`