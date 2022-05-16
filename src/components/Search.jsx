import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'


export default function Search(props) {
    
    const [search, setSearch] = React.useState('')

    return (
        <Container>
            <Form className="mt-3">
                <Form.Group className="align-items-center">
                        <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search for Pokemon" />
                        <Button className="mt-2" block onClick={(e) => props.getPokemon(search)}>Click to Search</Button>
                </Form.Group>
            </Form>
        </Container>
        )
    }