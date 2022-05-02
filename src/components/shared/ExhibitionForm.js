import { Form, Container, Button, Row, Col } from 'react-bootstrap'

const ExhibitionForm = (props) => {
    const {exhibition, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <br></br>
            <h1>{heading}</h1>
            <br></br>
            <Form onSubmit={handleSubmit} className="m-2 p-5 w-100 shadow bg-body rounded">
            <Row>
                <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    style={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                    placeholder="What is The Name of Your Exhibition?"
                    value={exhibition.name}
                    name='name'
                    onChange={handleChange}
                />
                </Col>
                <Col>
                <div>
                {/* dropdown menu to select an adventure type */}
                <Form.Label>Exhibition Type</Form.Label>
                    <select 
                        style={{
                            width: '100%',
                            textAlign: 'center'
                        }}
                        className="form-select form-select-md mb-3" id="types" value={exhibition.type}
                        onChange={handleChange}>
                                <option value="Sneakers">Sneakers</option>
                                <option value="Watches">Watches</option>
                                <option value="Abstract Expressionism">Abstract Expressionism</option>
                                <option value="Realism">Realism</option>
                                <option value="Gothic">Gothic</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Music">Music</option>
                                <option value="Cinema">Cinema</option>
                                <option value="Sculpture">Sculpture</option>
                    </select>
                </div>
                </Col>
            </Row>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    style={{
                        width: '100%',
                        textAlign: 'center'
                    }} 
                    placeholder="Description this exhibition?"
                    value={exhibition.description}
                    name='description'
                    onChange={handleChange}
                />
                <br></br>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ExhibitionForm