import React from 'react';
import './MyTrips.css'
import { Link } from 'react-router-dom'
import TripCard from '../../components/TripCard/TripCard'

const MyTripsPage = (props) => {
    return ( 
        <>
        <h1>My Trips</h1>
        <Link to=
        {{pathname: "/add-trip",
        state: {
            myTrips: [],
        }
            }}> <button>Add A Trip</button> </Link>

            <div className='container'>
                <div>
            {props.myTrips.map(myTrip =>
                <TripCard
                key={myTrip._id}
                myTrip={myTrip}
                handleDeleteMyTrip={props.handleDeleteMyTrip}
                user={props.user}
                />
                )}
        </div>
        </div>
        <table>
            <thead>
                <tr>
            <th>{}</th>
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