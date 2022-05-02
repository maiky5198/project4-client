import React, { useState } from 'react'
import { createExhibition } from '../../api/exhibitions'
import { createExhibitionFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import ExhibitionForm from '../shared/ExhibitionForm'

const CreateExhibition = (props) => {
    const {user, msgAlert} = props
    // console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [exhibition, setExhibition] = useState({name: '', type: ''})
    console.log('adventure in create', exhibition)

    const handleChange = (e) => {
        // e === event
        e.persist()
        //set's Adventure to the new values returned by the input fields
        setExhibition(prevExhibition => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            } 
            //sets the value of adventure.type to the string within the select input
            if(e.target.value === "Sneakers"){
                exhibition.type = "Sneakers"
            } else if(e.target.value === "Watches"){
                exhibition.type = "Watches"
            } else if(e.target.value === "Abstract Expressionism" ){
                exhibition.type = "Abstract Expressionism" 
            } else if(e.target.value === "Realism" ){
                exhibition.type = "Realism"
            } else if(e.target.value === "Romanesque" ){
                exhibition.type = "Romanesque"
            } else if(e.target.value === "Architecture" ){
                exhibition.type = "Architecture"
            } else if(e.target.value === "Music" ){
                exhibition.type = "Music"
            } else if(e.target.value === "Cinema" ){
                exhibition.type = "Cinema"
            } else if(e.target.value === "Sculpture" ){
                exhibition.type = "Sculpture"
            } 
    
            const updatedValue = { [name]: value }

            console.log('prevAdventure', prevExhibition)
            console.log('updatedValue', updatedValue)

            return {...prevExhibition, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        //api call to create a new adventure
        createExhibition(user, exhibition)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/exhibitions/${res.data.exhibition._id}`)})
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: createExhibitionFailure,
                    variant: 'danger',
                }))
        //  console.log('this is the adventure', Exhibition)
    }

    return (
        <ExhibitionForm 
            exhibition={exhibition}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add New Exhibition"
        />
    )
}

export default CreateExhibition