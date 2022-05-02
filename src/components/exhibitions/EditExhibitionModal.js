import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ExhibitionForm from '../shared/ExhibitionForm'

const EditExhibitionModal = (props) => {
    const { user, show, handleClose, updateExhibition, triggerRefresh } = props
    const [exhibition, setExhibition] = useState(props.exhibition)

    const handleChange = (e) => {
        // e === event
        e.persist()
        //sets Adventure to the updated value of the input fields
        setExhibition(prevExhibition => {
            const name = e.target.name
            let value = e.target.value
            // console.log('etarget type', e.target.type)
            // console.log('this is e.target checked', e.target.checked)
            if (e.target.type === 'number') {
                value = parseFloat(e.target.value)
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
            } else if(e.target.value === "Gothic" ){
                exhibition.type = "Gothic"
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

            // console.log('prevAdventure', prevAdventure)
            // console.log('updatedValue', updatedValue)

            return {...prevExhibition, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        // console.log('the adventure to submit', adventure)
        //api call to update an adventure
        updateExhibition(user, exhibition)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .catch(console.error)
        // console.log('this is the adventure', adventure)
    }

    return (
        //this is the pop up that displays the adventure form for editing
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ExhibitionForm 
                    exhibition={exhibition}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit exhibition"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditExhibitionModal