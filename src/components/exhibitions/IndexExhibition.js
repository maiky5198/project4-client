import React, { useState, useEffect } from 'react'
import { getAllExhibitions } from '../../api/exhibitions'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import fishing from '../../images/fishing.png'
import hiking from '../../images/hiking.png'
import jogging from '../../images/jogging.png'
import biking from '../../images/biking.png'
// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS syntax
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexExhibitions = (props) => {
    const [exhibitions, setExhibitions] = useState(null)


    useEffect(() => {
        //api call to get all the adventures
        getAllExhibitions()
            .then(res => {
                // console.log('res.data.adventures', res.data.adventures)
                setExhibitions(res.data.exhibitions)
            })
            .catch(console.error)
    }, [])

    //loading screen while api call happens
    if (!exhibitions) {
        return <p>loading...</p>
    } else if (exhibitions.length === 0) {
        return <p>no Exhibition yet, go add some</p>
    }

    let exhibitionCards

    if (exhibitions.length > 0) {
        exhibitionCards = exhibitions.map(exhibition => {
            //sets the image on top of the cards depending on the adventure type
            let activity 
             if (exhibition.type === 'Sneakers'){
                    activity = jogging
                }
             if (exhibition.type === 'Watches'){
                    activity = biking
                } 
             if (exhibition.type === 'Contemporary Art'){
                    activity = hiking
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
                        {/* link to all adventures made by a specific user */}
                        <span>by:</span><Link to={`/exhibitions/user/${exhibition.owner._id}`}>{exhibition.owner.email}</Link>
                    </Card.Footer>
                </Card>
            )
        })
    }

    return (
        <>
        <br></br>
            <div className= 'title'><h1>All of The Exhibitions</h1></div>
            <div style={cardContainerLayout}>
                {exhibitionCards}
            </div>
        </>
    )
}

export default IndexExhibitions