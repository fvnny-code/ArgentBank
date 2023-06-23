import axios from "axios";

export const clientHTTP = axios.create({
    baseURL: import.meta.env.API_URI,
    headers:{
        "Content-Type": "application/json"
    }
})

export async function authenticate(username, password){

    // return await clientHTTP.post(`/quelquechose/autrechose`)
    // .then(response => response.data)
}

export async function getUserInfos(){
    // return await clientHTTP.post(`/quelquechose/autrechose`)
    // .then(response => response.data)
}