import React from 'react';

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
            </>
            :
            'Not Yours'
        }
        </>
    )
}

export default TripCard;