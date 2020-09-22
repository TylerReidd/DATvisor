const baseUrl = "/api/locationID";
const baseUrl2 = '/api/getAttractions'

export function getLocationID({searchValue}) {
  return fetch(
    baseUrl,
    {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}), 
      body:JSON.stringify({ 
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
    }})
    },{ mode: "cors" }
  ).then((res) => console.log(res.json()));
}

// export function getAttractions({locationID}) {
//   return fetch(
//     baseUrl2,
//     {
//       method: 'POST',
//       headers: new Headers({'Content-Type': 'application/json'}), 
//       body:JSON.stringify({ 
//         baseUrl: 'attractions/list',
//         params: {
//         "lang":"en_US",
//         "currency":"USD",
//         "sort":"recommended",
//         "lunit":"km",
//         "location_id": locationID
//     }})
//     },{ mode: "cors" }
//   ).then((res) => console.log(res.json()));
// }