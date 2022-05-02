
import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const addItem = (user, exhibitionId, newItem) => {
    console.log('user', user)
    console.log('this is newitem', newItem)
    return axios({
        url: `${apiUrl}/item/${exhibitionId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: newItem }
    })
}

// PATCH -> update function
export const updateItem = (user, exhibitionId, itemId, updatedItem) => {
    console.log('user', user)
    console.log('this is updatedGear', updatedItem)
    return axios({
        url: `${apiUrl}/item/${exhibitionId}/${itemId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { item: updatedItem }
    })
}

// DELETE -> remove function
export const removeItem = (user, exhibitionId, itemId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/item/${exhibitionId}/${itemId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}