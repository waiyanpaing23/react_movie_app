import axios from "axios"

export const api_key = "d2a02a4ad054cbb690e5c731dba98a0f"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/"
})