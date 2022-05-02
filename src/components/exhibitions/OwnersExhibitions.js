import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOwnerExhibitions } from '../../api/exhibitions'
import { Card, Spinner, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import watches from '../../images/watches.png'
import sneaker from '../../images/sneaker.png'
import abstractexpressionism from '../../images/abstractexpressionism.png'
import realism from '../../images/realism.png'
import gothic from '../../images/gothic.png'
import architecture from '../../images/architecture.png'
import music from '../../images/music.png'
import cinema from '../../images/cinema.png'
import sculpture from '../../images/sculpture.png'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const OwnersExhibitions = (props) => {
    const [ownersExhibitions, setOwnersExhibitions] = useState(null)

    const {user} = props

    const {ownerId} = useParams()

    useEffect(() => {
        // console.log('user id', user._id)
        //api call to get all exhibitions created by a specific user
        getOwnerExhibitions(ownerId)
            .then(res => {
                // console.log('res.data', res.data)
                setOwnersExhibitions(res.data.exhibitions)
            })
            .catch(console.error)
            
    }, [user, ownerId])

    
    if (!ownersExhibitions) {
        return ( 
                <Container fluid className='' >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
        )
    }
    if (ownersExhibitions.length === 0) {
        return (
            <div> 
                <p>Could not find exhibitions by that user.</p>
            </div>
        )
    }

    let exhibitionCards

    if (ownersExhibitions.length > 0) {
        exhibitionCards = ownersExhibitions.map(exhibition => {
            let activity  
            if (exhibition.type === 'Sneakers'){
                   activity = sneaker
               }
            if (exhibition.type === 'Watches'){
                   activity = watches
               } 
            if (exhibition.type === 'Abstract Expressionism'){
                   activity = abstractexpressionism
               } 
            if (exhibition.type === 'Realism'){
                activity = realism
            } 
            if (exhibition.type === 'Gothic'){
                activity = gothic
            }    
            if (exhibition.type === 'Architecture'){
                activity = architecture
            } 
            if (exhibition.type === 'Music'){
                activity = music
            } 
            if (exhibition.type === 'Cinema'){
                activity = cinema
            } 
            if (exhibition.type === 'Sculpture'){
                activity = sculpture
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
            <div className='title'><h1> Exhibitions </h1></div>
            <div style={cardContainerLayout}>
                {exhibitionCards}
            </div>
        </>
    )
}

export default OwnersExhibitions