import React from 'react';
import './MyTrips.css'
import { Link } from 'react-router-dom'

const MyTripsPage = (props) => {
    return ( 
        <>
        <h1>WORK</h1>
        
        <Link to=
        {{pathname: "/addTrip"
            }}> <button>Add Trip</button> </Link>
        </>
     );
}
 
export default MyTripsPage;