import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditItemModal from './EditItemModal'
import { addItem, removeItem } from '../../api/item'

const ShowItem = (props) => {
    // most of these are simply to pass to edit modal
    const {item, user, exhibition, triggerRefresh} = props

    const [showEditModal, setShowEditModal] = useState(false)


    const destroyItem = () => {
        removeItem(user, exhibition._id, item._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    
    return (
        <>
            <Card className="m-2" style={{
                width: "15rem",
                alignment: "center",
            }}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <small>Image: {item.image}</small><br/>
                    <small>Artist: {item.artist}</small><br/>
                    <small>Year: {item.year}</small><br/>
                    <small>{item.description}</small><br/>
                    {/* <Card.Footer >
                    </Card.Footer> */}
                    {
                        user._id === exhibition.owner && 
                            <>
                                <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Item
                                </Button>
                                <Button onClick={() => destroyItem()}variant="danger">
                                    Delete Item
                                </Button>
                            </>
                    }
                </Card.Body>
            </Card>
            <EditItemModal 
                user={user}
                exhibition={exhibition}
                item={item}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowItem