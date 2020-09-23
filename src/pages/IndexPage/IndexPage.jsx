import React, { useState } from 'react';
import axios from 'axios'
const baseUrl = "/api/locationID";


const IndexPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])
       
        const apiCall = async () => {
            try {
                const response = await axios.post(
                    baseUrl,
                    {
                        baseUrl: 'locations/search',
                        params: {
                        "location_id":"1",
                        "limit":"30",
                        "sort":"relevance",
                        "offset":"0",
                        "lang":"en_US",
                        "currency":"USD",
                        "units":"km",
                        "query": searchValue
                        }
                    })
                setData(response.data.attractions)
            } catch (err) {console.log(err)}
        }
       
        console.log(data)
        return (
            <>
            <h1>DATvisor</h1>
            <b> Need Ideas? </b><br />
            <b>Search the city!</b><br />
            <input type="text" id="location" name="location" value={searchValue} onChange={event => setSearchValue(event.currentTarget.value)}/><br /><br />
            <button className="btn btn-primary" type="submit" onClick={()=> apiCall()}> ENTER </button>
            <br />
            <>
            {data.map(attraction =>
            <span key={attraction.location_id}>
                <a title={attraction.description}
                target='_blank'
                rel="noopener noreferrer"
                href={ attraction.booking.url}> { attraction.name } </a>
                <br /><br />
                </span>)}
            </>
            <button>Itineraries</button>
            </>
         );
}


 
export default IndexPage;
