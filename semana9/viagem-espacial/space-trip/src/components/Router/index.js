import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage/index';
import Login from '../LoginPage/index';
import ApllicationFormPage from '../ApllicationFormPage/index';
import ListTripsPage from '../ListTripsPage/index';
import CreateTripPage from '../CreateTripPage/index';
import TripDetailsPage from '../TripDetailsPage/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/home-page">
            <HomePage />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/form-page">
            <ApllicationFormPage />
        </Route>
        <Route exact path="/trips/list">
            <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
            <CreateTripPage />
        </Route>
        <Route exact path="/trips/details">
            <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;