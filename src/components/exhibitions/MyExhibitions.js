import React, { useState, useEffect } from 'react'
import { getMyExhibitions } from '../../api/exhibitions'
import { Card, Spinner, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import fishing from '../../images/fishing.png'
import hiking from '../../images/hiking.png'
import jogging from '../../images/jogging.png'
import biking from '../../images/biking.png'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const MyExhibitions = (props) => {
    const [myExhibitions, setMyExhibitions] = useState(null)

    const {user} = props

    useEffect(() => {
        console.log('user id', user._id)
        //api call to get all adventures made by the current user
        getMyExhibitions(user)
            .then(res => {
                console.log('res.data', res.data)
                setMyExhibitions(res.data.exhibitions)
            })
            .catch(console.error)
            
    }, [user])

    
    if (!myExhibitions) {
        return ( 
                <Container fluid className='' >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
        )
    }
    if (myExhibitions.length === 0) {
        return (
            <div>
                <h3> My Exhibitions</h3>   
                <p>You have no Exhibitions</p>
            </div>
        )
    }

    let exhibitionCards

    if (myExhibitions.length > 0) {
        exhibitionCards = myExhibitions.map(exhibition => {
            let activity 
             if (exhibition.type === 'Walk' || exhibition.type === 'Trail Run' || exhibition.type === 'Road Run'){
                    activity = jogging
                }
             if (exhibition.type === 'Road Bike' || exhibition.type === 'Mountain Bike'){
                    activity = biking
                } 
             if (exhibition.type === 'Hike'){
                    activity = hiking
                } 
             if (exhibition.type === 'Fishing'){
                    activity = fishing
                } 
               
            return (
                <Card key={exhibition._id} style={{width: '30%' }} className="m-2 shadow p-3 mb-5 bg-body rounded">
                    <img src= {activity} alt= 'activity' className= 'card-img-top'></img>
                    <Card.Header>{exhibition.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Link className='viewExhibition' to={`/exhibitions/${exhibition._id}`}>View {exhibition.type}</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <span>by:</span><Link to={`/exhibitions/user/${exhibition.owner._id}`}>{exhibition.owner.email}</Link>
                    </Card.Footer>
                </Card>
            )
        })
    }

    return (
        <>
        <br></br>
           <div className='title'><h1>My Exhibitions</h1></div>
            <div style={cardContainerLayout}>
                {exhibitionCards}
            </div>
        </>
    )
}

export default MyExhibitions