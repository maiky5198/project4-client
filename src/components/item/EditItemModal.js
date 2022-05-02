
import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ItemForm from '../shared/ItemForm'
import {updateItem} from '../../api/item'

const EditItemModal = (props) => {
    const { user, exhibition, show, handleClose, triggerRefresh } = props
    const [item, setItem] = useState(props.item)

    const handleChange = (e) => {
        // e === event
        e.persist()

        //sets gear to the updated values of the input fields
        setItem(prevItem => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            // console.log('prevGear', prevGear)
            // console.log('updatedValue', updatedValue)

            return {...prevItem, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        // console.log('the gear to submit', gear)
        //api call to update the gear
        updateItem(user, exhibition._id, item._id, item)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    return (
        //popup displaying the edit gear form
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ItemForm
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit Item"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditItemModal