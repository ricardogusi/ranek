import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})


export const api = {
    get(url) {
        return axiosInstance.get(url)
    },
    post(endpoint, body){
        return axiosInstance.post(endpoint, body)
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint)
    },
    put(endpoint, body){
        return axiosInstance.put(endpoint, body)
    }
}

export function getCep(cep){
    return axios.get(`https://viacep.com.br/ws/${cep}/json`)
}