import React from 'react';
import { Link } from 'react-router-dom';
import PreCard from '../../../PreCard/PreCard';
import './PreArrivalList.css';


const PreArrivalList = (props) => {
    return(
        <> 
        <h1>Pre-Arrival Itinerary</h1>
        <div className='container'>
        <div>
            {props.preArrivals.map(preArrival =>
                <PreCard
                key={preArrival._id}
                preArrival={preArrival}
                handleDeletePreArrival={props.handleDeletePreArrival}
                user={props.user}
                />
                )}
        </div>
        <Link
        to={{
            pathname: '/addPreArrival',
            state: {
                preArrivals: []
            }
        }}>
        <button type="button" className="btn btn-success">Add Task</button>
        </Link>
        </div>
        </>
    )
}

export default PreArrivalList