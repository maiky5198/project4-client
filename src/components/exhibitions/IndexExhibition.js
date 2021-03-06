import React, { useState, useEffect } from 'react'
import { getAllExhibitions } from '../../api/exhibitions'
import { Card } from 'react-bootstrap'
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
        //api call to get all the exhibitions
        getAllExhibitions()
            .then(res => {
                // console.log('res.data.exhibitions', res.data.exhibitions)
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
            //sets the image on top of the cards depending on the exhibition type
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
                <Card key={exhibition._id} style={{width: '30%' }} className="m-2 p-3 mb-5 bg-body rounded">
                    <img src= {activity} alt= 'exhibition type' className= 'card-img-top'></img>
                    <Card.Header>{exhibition.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Link className='viewExhibition' to={`/exhibitions/${exhibition._id}`}>View {exhibition.type}</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* link to all exhibitions made by a specific user */}
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