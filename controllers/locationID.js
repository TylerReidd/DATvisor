const { json } = require("express")
const axios  = require('axios')

const getLocationID = async ({baseUrl, params}) => {
    const response = await axios({
        "method":"GET",
        "url":`https://tripadvisor1.p.rapidapi.com/${baseUrl}`,
        "headers":{
            "content-type":"application/json",
            "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
            "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
            "useQueryString":true
        },"params": params
    })
    console.log('YOUR LOCATION IS ' + response.data.data[0].result_object.location_id)
    //Make safe
    return response.data.data[0].result_object.location_id
}

const getAttractionsFromLocationID = async ({locationID}) => {
    return locationID
}

const getAttractionsForLocationName = async (req, res) => {
    const { body: {baseUrl, params} } = req
    const locationID = await getLocationID({baseUrl, params})
    const attractions = await getAttractionsFromLocationID({locationID})
    res.json(attractions)
    return
}

module.exports = {
    getAttractionsForLocationName
}