import React from 'react';
import { Link } from 'react-router-dom';

function PreCard({ preArrival, handleDeletePreArrival }) {
    return (
        <>
            <div className="card">
                <div class="card-body">
                <h2>Pre Arrival Itinerary</h2>
                <ul>
                    <li>{preArrival.toDo}</li>
                </ul>
                </div>
            <>
            <button type="submit" className="btn btn-danger" onClick={() => handleDeletePreArrival(preArrival._id)}>
                    Delete
                </button>
                <Link 
                    className="btn yellow black-text"
                    to={{
                        pathname: '/edit',
                        state: {preArrival}
                    }}
                    >
                        Edit
                    </Link>
                 </>
                
            </div>
        </>
    )
}

export default PreCard;