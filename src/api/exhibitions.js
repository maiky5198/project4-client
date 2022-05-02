import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllExhibitions = () => {
    return axios(`${apiUrl}/exhibitions`)
}

// index of user's exhibition function
export const getMyExhibitions = (user) => {
    return axios({
        url: `${apiUrl}/exhibitions/mine`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

//index of a specific user's exhibition function
export const getOwnerExhibitions = (ownerId) => {
    return axios(`${apiUrl}/exhibitions/user/${ownerId}`)
}

//show function
export const getOneExhibition = (exhibitionId) => {
    return axios(`${apiUrl}/exhibitions/${exhibitionId}`)
}

// POST -> create function
export const createExhibition = (user, newExhibition) => {
    console.log('user', user)
    console.log('this is newExhibition', newExhibition)
    return axios({
        url: `${apiUrl}/exhibitions`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { exhibition: newExhibition }
    })
}

// PATCH -> update function
export const updateExhibition = (user, updatedExhibition) => {
    console.log('user', user)
    console.log('this is updatedExhibition', updatedExhibition)
    return axios({
        url: `${apiUrl}/exhibitions/${updatedExhibition._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { exhibition: updatedExhibition }
    })
}

// DELETE -> remove function
export const removeExhibition = (user, exhibitionId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/exhibitions/${exhibitionId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

