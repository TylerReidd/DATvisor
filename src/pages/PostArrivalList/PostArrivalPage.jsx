import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import './PostArrivalPage.css'


const PostList = (props) => {
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
                <div>
                    <img id="dat" src="https://i.imgur.com/CkrPkVr.png" alt=""/>
                </div>

            
        </>
    )
}


    


//     return(
//         <> 
//         <h1>Post-Arrival Itinerary</h1>
//         <div className='container'>
//         <div>
//             {props.postArrivals.map(postArrival =>
//                 <PostCard
//                 key={postArrival._id}
//                 postArrival={props.postArrivals}
//                 handleDeletePostArrival={props.handleDeletePostArrival}
//                 user={props.user}
//                 />
//                 )}
//         </div>
//         <Link
//         to={{
//             pathname: '/postToDo',
//             state: {
//                 postArrivals: []
//             }
//         }}>
//         <button type="button" className="btn btn-success">ADD Activity</button>
//         </Link>
//         </div>

            
//         </>
//     )
// }

export default PostList