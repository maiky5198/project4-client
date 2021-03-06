import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { addItem } from '../../api/item'
import ItemForm from '../shared/ItemForm'

const AddItemModal = (props) => {
    const { user, show, handleClose, exhibition, triggerRefresh } = props
    const [item, setItem] = useState({})

    const handleChange = (e) => {
        // e === event
        e.persist()

        //sets item the value of the input fields
        setItem(prevItem => {
            const name = e.target.name
            let value = e.target.value
            // console.log('etarget type', e.target.type)
            if (e.target.type === 'string') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            // console.log('prevItem', prevItem)
            // console.log('updatedValue', updatedValue)

            return {...prevItem, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        // console.log('the item to submit', item)
        //api call to create a new piece of item
        addItem(user, exhibition._id, item)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    return (
        //pop up displaying the item form
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ItemForm
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Add some Images"
                />
            </Modal.Body>
        </Modal>
    )
}

export default AddItemModal
