import React from 'react'
import { Link } from 'react-router-dom'


function PostCard({ user, postArrival, handleDeletePostArrival}) {
    return (
        <>
        <div className="card">
            <h2>Post Arrival Itinerary</h2>
            <ul>
                <li>{postArrival.toDo}</li>

            </ul>
        </div>
        <>
        <Link 
        className="btn yellow black-text"
        to={{
            pathname: '/editPost',
            state: {postArrival}
        }}>
        <button type="submit" className="btn btn-warning">Edit Activity</button>
        </Link>
        </>
        <>
        <button type="submit" className="btn btn-danger" onClick={() => handleDeletePostArrival(postArrival._id)}>
            Delete 
        </button>
        </>
        </>
    )
}

export default PostCard;