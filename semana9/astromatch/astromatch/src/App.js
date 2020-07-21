import React, {useState, useEffect} from 'react';
import AllMacthes from './components/AllMatches/index';
import Profiles from './components/Profiles/index';
import styled from 'styled-components';
import axios from 'axios';
import PeopleAlt from '@material-ui/icons/PeopleAlt';


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-bombonatti-turing"

const ContainerMainApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #9E8B80;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
` 
const ContainerFooter = styled.div` 
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: gray;
  border: 1px solid black;
  width: 45%;
  border-radius: 10px; 
`

const H2Mete = styled.h2`
  color: red;
  display: inline;
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
`

const H2Match = styled.h2`
  color: orange;
  display: inline;
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
` 

const ButtonChangePage = styled.button`
  width: 8%;
  height: 50px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  :active{
    border: none;
    background: #71656D;
  }
  :hover{
    background: #929E98;
    transform: translate3d(5%, 5%, 0) scale3d(1.2, 1.2, 1.2);
    transition: transform 0.45s ease-in-out;
  }
  
`
export default function App() {
  const [page, setPage] = useState("Profiles")
  const [person, setPerson] = useState({})

    const getPerson = () => {
        axios.get(`${baseUrl}/person`)
        .then((response) => {
            setPerson(response.data.profile)
        }).catch(e => {
            console.log(e.message)
        })
    }
  
  useEffect(() => {
    getPerson()
  }, [])

  const mudaPage = () => {
    setPage("AllMatches")
    if(page === "AllMatches"){
      setPage("Profiles")
    }
  }

  return (
    <ContainerMainApp>
      <ContainerFooter>
        <div></div>
        <div>
          <H2Mete>mete</H2Mete>
          <H2Match>Match</H2Match>
        </div>
        <ButtonChangePage onClick={mudaPage} >
          <PeopleAlt />
        </ButtonChangePage>
      </ContainerFooter>
      {page === "Profiles" ? <Profiles
        photo = {person.photo} 
        person = {person}
        getPerson= {getPerson}
      /> : <AllMacthes />}
    </ContainerMainApp>
  );
}

