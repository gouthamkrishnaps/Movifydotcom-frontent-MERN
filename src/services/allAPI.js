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

//upload theatre
export const uploadTheatreAPI = async(reqBody)=>{
    return await commonApi("POST",`${BASE_URL}/user/theatres`,reqBody,"")
}

//get all theatre
export const getAllTheatresAPI = async()=>{
    return await commonApi("GET",`${BASE_URL}/theatres/allTheatres`)
}

//edit movie
export const editMovieAPI = async(movieId,reqBody)=>{
    return await commonApi("PUT",`${BASE_URL}/movie/update/${movieId}`,reqBody)
}

//edit movie
export const editTheatreAPI = async(theatreId,reqBody)=>{
    return await commonApi("PUT",`${BASE_URL}/theatre/update/${theatreId}`,reqBody)
}

//delete movie
export const deleteMovieAPI = async(movieId)=>{
    return await commonApi("DELETE",`${BASE_URL}/movie/delete/${movieId}`,{})
}

//delete theatre
export const deleteTheatreAPI = async(theatreId)=>{
    return await commonApi("DELETE",`${BASE_URL}/theatre/delete/${theatreId}`,{})
}

//get all users
export const getAllUsersAPI = async()=>{
    return await commonApi("GET",`${BASE_URL}/users/fetch`)
}

//delete user
export const deleteUserAPI = async(userId)=>{
    return await commonApi("DELETE",`${BASE_URL}/user/delete/${userId}`,{})
}
