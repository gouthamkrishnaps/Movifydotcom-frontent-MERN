import { BASE_URL } from "./base_URL"
import { commonApi } from "./commonAPI"




//register api
export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,user,"")
}

//login api
export const loginAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,user,"")
}

//upload movie
export const uploadMovieAPI = async(reqBody)=>{
    return await commonApi("POST",`${BASE_URL}/user/movies`,reqBody,"")
}

//get all movies
export const getAllMoviesAPI = async()=>{
    return await commonApi("GET",`${BASE_URL}/movies/allmovies`)
}