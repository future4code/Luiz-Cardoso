import React, { useEffect, useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {ContainerManager} from '../ListTripsPage/style';
import TripDetailsPage from '../TripDetailsPage/index'
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bombonatti"; 


const ListTripsPage = () => {
    const [trips, setTrips] = useState([]);
    const [detailTrip, setDetailTrip] = useState({});
    let history = useHistory();
    const pathParams = useParams(); 
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token === null) {
            history.push("/login")
        } else {
            getListTrips()
        }
    }, [history])


    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }
    
    const getListTrips = () => {

        axios.get(`${baseUrl}/trips`).then(response => {
            setTrips(response.data.trips)
            console.log(response)
        }).catch( err => {
            console.log(err.message)
        })
    }

    const getTripDetail = (trip) => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}/trip/${trip}`, {

            headers: {
                auth: token
            }

        }).then(response => {
            setDetailTrip(response.data.trip)

        }).catch( err => { 
            console.log(err.message)
        })

    }

    const logout = () => {
        window.localStorage.clear();
        history.push("/login");
    }

    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>
                <h1>List Trip Page</h1>
                {trips.map(trip => {
                    return (
                        <div key={trip.id}>
                            <h1> {trip.name} </h1>
                            <p>{trip.planet}</p>
                            <p>{trip.description}</p>
                            <p>{trip.date}</p>
                            <p>{trip.durationInDays}</p>
                            <button onClick={() => {getTripDetail(trip.id)}}> Detalhes: </button>
                            
                        </div>
                    )
                })}
            </div>
            <ContainerManager>
                <button onClick={goToListTripsPage}>Lista de Viagens</button>
                <button onClick={goToCreateTripPage}>Nova Viagem</button>
                <button onClick={() => {getTripDetail()}}>Aprovação Viagens</button>
            </ContainerManager>
        </div>
    );
}

export default ListTripsPage;