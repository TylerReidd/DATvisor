import React from 'react';
import { Link } from 'react-router-dom';
import PreCard from '../../components/PreCard/PreCard';
import './PreArrivalList.css';

const PreArrivalList = (props) => {
    return (
        <>
            <h1>Pre-Arrival List</h1>
            <div className='PreArrivalList-grid'>
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
                state: {}
            }}>

                <button type="button" class="btn btn-success">Add Pre-Arrival Itinerary</button>
            </Link>
        </>
    )
}
 
export default PreArrivalList;