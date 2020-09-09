import React, {useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {ContainerManager} from '../TripDetailsPage/style';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bombonatti"

const AprovePage = () => {
    let history = useHistory();
    const pathParams = useParams(); 

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null) {
            history.push("/login");
        }


    }, [history])
    
    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToAprovePage = () => {
        history.push("/trips/details")
    }

    const goToLogin = () => {
        history.push('/login')
    };

    const logout = () => {
        window.localStorage.clear();
        history.push("/login");
    }


    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>

                <h1>Trip Details Page</h1>
            </div>
            <ContainerManager>
                <button onClick={goToListTripsPage}>Lista de Viagens</button>
                <button onClick={goToCreateTripPage}>Nova Viagem</button>
                <button onClick={goToAprovePage}>Aprovação Viagens</button> 
            </ContainerManager>
        </div>
    );
}

export default AprovePage;