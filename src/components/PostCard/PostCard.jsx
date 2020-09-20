import React from 'react'
import { Link } from 'react-router-dom'


function PostCard({ user, postArrival, handleDeletePostArrival}) {
    return (
        <>
        <div className="card">
            <h2>Post Arrival Itinerary</h2>
            <ul>
                <li>{postArrival.toDo}</li>
                <li>{postArrival.activity}</li>
                <li>{postArrival.time}</li>
            </ul>
        </div>
        <>
        <Link 
        className="btn yellow black-text"
        to={{
            pathname: '/editPost',
            state: {postArrival}
        }}>
        Edit Activity
        </Link>
        </>
        </>
    )
}

export default PostCard;