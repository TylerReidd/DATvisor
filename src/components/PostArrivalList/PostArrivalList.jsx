import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../PostCard/PostCard'
import './PostArrivalList.css'


const PostArrivalList = (props) => {
    return(
        <> 
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
export default PostArrivalList