import tokenService from '../services/tokenService';
const BASE_URL = '/preArrival/';

export function create(preArrival) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(preArrival)
    }, { mode: "cors" })
        .then(res => res.json());
}