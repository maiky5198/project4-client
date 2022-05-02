
import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const addComment = (user, exhibitionId, newComment) => {
    console.log('user', user)
    console.log('this is newComment', newComment)
    return axios({
        url: `${apiUrl}/comments/${exhibitionId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: newComment }
    })
}

// DELETE -> remove function
export const removeComment = (user, exhibitionId, commentId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/comments/${exhibitionId}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}