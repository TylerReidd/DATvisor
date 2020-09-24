import React from 'react';
import './MyTrips.css'
import { Link } from 'react-router-dom'
import TripCard from '../../components/TripCard/TripCard'

const MyTripsPage = (props) => {
    return ( 
        <>
        <h1>My Trips</h1>
                {props.myTrips.map(myTrip =>
                <TripCard
                key={myTrip._id}
                myTrip={myTrip}
                handleDeleteMyTrip={props.handleDeleteMyTrip}
                user={props.user}
                />
                )}
                </>
     );
}
 
export default MyTripsPage;