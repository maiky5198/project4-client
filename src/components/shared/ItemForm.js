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
                    value={item.img}
                    name='image'
                    type="String"
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="description of item?"
                    value={item.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Manufacturer</Form.Label>
                <Form.Control 
                    placeholder="manufacturer?"
                    value={item.manufacturer}
                    name='manufacturer'
                    type="number"
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ItemForm