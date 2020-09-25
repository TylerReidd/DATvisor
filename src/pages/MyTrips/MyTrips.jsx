import React from 'react';
import './MyTrips.css'
import TripCard from '../../components/TripCard/TripCard'
const MyTripsPage = (props) => {
    return ( 
        <>
        <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
                <h1>My Trips</h1>
                {props.myTrips.map((myTrip) =>
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