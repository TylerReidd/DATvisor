import tokenService from '../services/tokenService';
const BASE_URL = '/post/';

export function create(postArrival) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(postArrival)
    }, { mode: "cors" })
        .then(res => res.json());
}