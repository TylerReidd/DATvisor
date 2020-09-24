import React from 'react';
import { Link } from 'react-router-dom';

function TripCard({ user, myTrip, handleDeleteMyTrip}) {
    return (
        <>
        {user._id ? 
            <>
                <div>
                    <div>
                        <li>{myTrip.location}</li>
                    </div>
                </div>
                    
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