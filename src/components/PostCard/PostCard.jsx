import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard({ user, postArrival, handleDeletePostArrival}) {
    return (
        <>
        {user._id ?   
        <>
        <div>
            <div>
                <li>{postArrival.toDo}</li>            
            </div>
        </div>
       
        <Link 
        className="btn yellow black-text"
        to={{
            pathname: '/editPost',
            state: {postArrival}
        }}>
        <button type="submit" className="btn btn-warning btn-sm">Edit Activity</button>
        </Link>
        
        <button type="submit" className="btn btn-danger btn-sm" onClick={() => handleDeletePostArrival(postArrival._id)}>
            Delete 
        </button>
        </>
        :
        'Not Yours'
    }
        </>
    )
}

export default PostCard;