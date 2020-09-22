import React, { useState } from 'react';
import './IndexPage.css'
import { Link } from 'react-router-dom'
import { getLocationID } from '../../services/locationID';

const IndexPage = () => {
    const [searchValue, setSearchValue] = useState('')
        return (
            <>
            <h1>DATvisor</h1>
            <b> Where are you going? </b><br /><br />
            <input type="text" id="location" name="location" value={searchValue} onChange={event => setSearchValue(event.currentTarget.value)}/><br /><br />
            <button className="btn btn-primary" type="submit" onClick={()=> getLocationID({searchValue}) }> ENTER </button>
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
         );
}
 
export default IndexPage;