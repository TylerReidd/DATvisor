import React from 'react';
import { Link } from 'react-router-dom';

function PreCard({ user, preArrival, handleDeletePreArrival }) {
    return (
        <>
            <div className="card">
                <div class="card-body">
                <h2>Pre Arrival Itinerary</h2>
                <ul>
                    <li>{preArrival.toDo}</li>
                </ul>
                </div>
            </div>
            <>
            
            </>
        </>
    )
}

export default PreCard;