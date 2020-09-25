import React from 'react';
import './ItineraryPage.css'
import PreCard from '../../components/PreCard/PreCard'
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard'

const ItineraryPage = (props) => {
    return(
        <> 
        <h1>Pre-Arrival Itinerary</h1>
        <div className='container'>
        <div>
            {props.preArrivals.map((preArrival, myTrip) =>
                <PreCard
                key={myTrip._id}
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

        
        <h1>Post-Arrival Itinerary</h1>
        <div className='container'>
        <div>
            {props.postArrivals.map(postArrival =>
                <PostCard
                key={postArrival._id}
                postArrival={postArrival}
                handleDeletePostArrival={props.handleDeletePostArrival}
                user={props.user}
                />
                )}
        </div>
        <Link
        to={{
            pathname: '/postToDo',
            state: {
                postArrivals: []
            }
        }}>
            <br/>
        <button type="button" className="btn btn-success btn-med">ADD Activity</button>
        </Link>
        </div>  
        </>
    )
}
 
export default ItineraryPage;