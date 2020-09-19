import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import './PostArrivalPage.css'

const PostList = (props) => {
    return(
        <> 
        <h1>Post-Arrival Itinerary</h1>
        <div className="PostArrivalList-grid">
            {props.postArrivals.map(postArrival =>
                <PostCard
                key={postArrival._id}
                postArrival={postArrival}
                />
                )}
        </div>
        <Link
        to={{
            pathname: '/postToDo',
            state: {}
        }}>
        
        <button type="button" class="btn btn-success">ADD Activity</button>
        </Link>
      
        </>
    )
}

export default PostList