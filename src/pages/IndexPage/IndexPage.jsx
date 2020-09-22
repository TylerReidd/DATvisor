import React, { Component } from 'react';
import './IndexPage.css'
import { Link } from 'react-router-dom'

function Index () {
    return (
        <>
        <h1>Index Baby</h1>
            <Link 
            to="/preArrival"
            >
                <button>Pre</button>
            </Link>
            <Link
            to='/post'>
                Button
            </Link>
         </> 
        
    )
}

export default Index