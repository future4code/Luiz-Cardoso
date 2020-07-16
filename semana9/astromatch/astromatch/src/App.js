import React, {useState, useEffect} from 'react';
import AllMacthes from './components/AllMatches/index';
import Profiles from './components/Profiles/index';
import styled from 'styled-components';
import axios from 'axios';
import PeopleAlt from '@material-ui/icons/PeopleAlt'


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-bombonatti-turing"

const ContainerMainApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #9E8B80;
  width: 100%;
  border: 2px solid black;
  padding : 15px;
  height: 100vh;
` 
const ContainerFooter = styled.div` 
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: gray;
  border: 1px solid black;
  width: 70%;
  border-radius: 10px; 
  >h2 {
    margin: 0 auto;
  }
  >button {
      
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
        <h2>AstroMatch</h2>
      <button onClick={mudaPage} >
       <PeopleAlt />
      </button>
      </ContainerFooter>
      {page === "Profiles" ? <Profiles
        photo = {person.photo} 
        person = {person}
        getPerson= {getPerson}
      /> : <AllMacthes />}
    </ContainerMainApp>
  );
}

