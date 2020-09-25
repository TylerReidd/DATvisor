import React from 'react';
import { Link } from 'react-router-dom'

function TripCard({ user, myTrip, handleDeleteMyTrip}) {
    return (
        <>
        {user._id ? 
            <>
                <div>
                    <div>
                        <li>{myTrip.nameOfTrip}</li>
                    </div>
                </div>
                <Link 
                to={{
                    pathname: '/itinerary',
                    state: {myTrip}
                }}> <button type="submit" className="btn btn-warning btn-sm">Details</button>
                </Link>
                <Link 
                    className="btn yellow black-text"
                    to={{
                        pathname: '/edit-trip',
                        state: {myTrip}
                    }}>
                    <button type="submit" className="btn btn-warning btn-sm">Edit</button>
                    </Link>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={() => handleDeleteMyTrip(myTrip._id)}>
                            Delete 
                        </button>
            </>
            :
            'Not Yours'
        }
        </>
    )
}

export default TripCard;