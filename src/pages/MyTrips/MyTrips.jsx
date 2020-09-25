import React from 'react';
import './MyTrips.css'
import TripCard from '../../components/TripCard/TripCard'
const MyTripsPage = (props) => {
    return ( 
        <>
        <h1>My Trips</h1>
        <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
        <div className="card">
          <div className="card-body">
                {props.myTrips.map((myTrip) =>
                <TripCard
                key={myTrip._id}
                myTrip={myTrip}
                handleDeleteMyTrip={props.handleDeleteMyTrip}
                user={props.user}
                />
                )}
                </div>
                </div>
                </>
     );
}
export default MyTripsPage;