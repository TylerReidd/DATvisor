import React from 'react';
import './MyTrips.css'
import { Link } from 'react-router-dom'

const MyTripsPage = (props) => {
    return ( 
        <>
        <h1>My Trips</h1>
        <Link to=
        {{pathname: "/add-trip",
        state: {
            myTrips: []
        }
            }}> <button>Add A Trip</button> </Link>
        <table>
            <thead>
                <tr>
                    <th>Trip Name</th>
                    <th>Location</th>
                    <th>Departure</th>
                    <th>Itineraries</th>
                </tr>
            </thead>
            
        </table>

        </>
     );
}
 
export default MyTripsPage;