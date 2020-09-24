import tokenService from './tokenService';
const BASE_URL = '/api/myTrip/';

export function create(myTrip) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(myTrip)
    }, { mode: "cors" })
    .then(res => res.json());
}

export function getAll() {
  return fetch(BASE_URL, {
      method: "GET",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, { mode: "cors" })
  .then(res => res.json());
}

// export function deleteOne(id) {
//     return fetch(`${BASE_URL}${id}`, {
//         method: 'DELETE',
//         headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
//     }, {mode: "cors"})
//     .then(res => res.json());
//   }

// export function update(myTrip) {
//     return fetch(`${BASE_URL}${myTrip._id}`, {
//         method: "PUT",
//         headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
//         body: JSON.stringify(myTrip)
//     }, {mode: "cors"})
//     .then(res => res.json());
//   }

