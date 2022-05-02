import { Form, Container, Button } from 'react-bootstrap'

const ItemForm = (props) => {
    
    const {item, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="what is the name of this item?"
                    value={item.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Image</Form.Label>
                <Form.Control 
                    placeholder="image of item?"
                    value={item.image}
                    name='image'
                    type="string"
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="description of item?"
                    value={item.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Artist</Form.Label>
                <Form.Control 
                    placeholder="artist?"
                    value={item.artsit}
                    name='artist'
                    type="string"
                    onChange={handleChange}
                />
                 <Form.Label>Year</Form.Label>
                <Form.Control 
                    placeholder="year?"
                    value={item.year}
                    name='year'
                    type="number"
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ItemForm