import React, {useState, useEffect, useRef} from 'react'
import { getOneExhibition, removeExhibition, updateExhibition } from '../../api/exhibitions'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button, Row, Col } from 'react-bootstrap'
import EditExhibitionModal from './EditExhibitionModal'
import AddItemModal from '../item/AddItemModal'
import ShowItem from '../item/ShowItem'
import CommentForm from '../comments/CommentForm'
import ShowComment from '../comments/ShowComment'
import axios from 'axios'
require('dotenv').config()


const ShowExhibitions = (props) => {
// setting state here
    const [exhibition, setExhibition] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [itemModalOpen, setItemModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    // console.log('props in showexhibitions', props)
    const { id } = useParams()
    const {user} = props
    // console.log('id in showAdevtures', id)

    // we put updated in the array so that the page will re-render every time we make an update and trigger the trigger refresh function
    useEffect(() => {
        //calls the api to get a specific exhibition
        getOneExhibition(id)
            .then(res => {
                setExhibition(res.data.exhibition)
            })
            .catch(console.error)  
    }, [updated, id])

    //delete's an exhibition
    const removeTheExhibition = () => {
        removeExhibition(user, exhibition._id)
            .then(() => {navigate(`/exhibitions`)})
            .catch(console.error)
    }

    //we declare these variables here so we can change them later
    let itemCards
    let comments

    //after we find an exhibition, this checks for and renders item and comments respectively
    if(exhibition){
        if (exhibition.item.length > 0) {
            itemCards = exhibition.item.map(itemItem => (
                // need to pass all props needed for updateItem func in edit modal
                <ShowItem
                    key={itemItem._id} item={itemItem} user={user} exhibition={exhibition} triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
        if(exhibition.comments.length > 0){
            comments = exhibition.comments.map(comment => (
                <ShowComment key={comment._id} updated={updated} comment={comment} exhibition={exhibition} user={user}  triggerRefresh={() => setUpdated(prev => !prev)}/>
            ))
        }
    }

    //display a spinner if there isn't an exhibition
    if (!exhibition) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    if(exhibition.name){
        return (
            <>
            <Container className="fluid" id="showContainer">
                    <Card className='p-3 mb-5 bg-body rounded mt-3'>
                        <Card.Header><h2 style={{
                            textAlign: 'center'
                        }}>{exhibition.name}</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <Row>
                                <Col>
                                    <small>Type: {exhibition.type}</small><br/>
                                </Col>
                                <Col>
                                    <small>Description: {exhibition.description}</small><br/>
                                </Col>
                            </Row>
                            </Card.Text>
                        <h4>Item:</h4>
                        {/* show item cards if there is any, or a message indicating it's not necessary if there isn't */}
                        {exhibition.item.length > 0 ? 
                            <div className='itemBox'>
                                {itemCards}
                            </div>
                            :
                            <p>No Items yet</p>       
                        }   
                    </Card.Body>

                    {/* if the user owns this exhibition allow them to add item, edit, or delete it */}
                    {exhibition.owner === user._id && 
                    <Card.Footer>
                            <Button onClick={() => setItemModalOpen(true)} className="m-2" variant="info">
                                Add Item
                            </Button>
                            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                Edit Exhibition
                            </Button>
                            <Button className="m-2" variant="danger" onClick={removeTheExhibition}>
                                Delete Exhibition
                            </Button>
    
                    </Card.Footer>                        
                    }
                </Card>
            </Container>
            <div className='commentBox'> 
                <CommentForm user={user} exhibition={exhibition} triggerRefresh={() => setUpdated(prev => !prev)} heading="Comments"/>
                {comments}
            </div>
            {/* a pop up to edit the exhibition */}
            <EditExhibitionModal 
            exhibition = {exhibition}
            show={modalOpen}
            user={user}
            triggerRefresh={() => setUpdated(prev => !prev)}
            updateExhibition={updateExhibition}
            handleClose={() => setModalOpen(false)}
    
            />
            {/* a pop up to add the item */}
            <AddItemModal
                show={itemModalOpen}
                user={user}
                exhibition={exhibition}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setItemModalOpen(false)}
            />
            </>
        )

    }
}

export default ShowExhibitions