import React from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {ContainerManager} from '../TripDetailsPage/style';


const AprovePage = () => {
    let history = useHistory();
    const pathParams = useParams(); 
    
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

    return (
        <div>
            <div>
                <button onClick={goToLogin}>Logout</button>

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