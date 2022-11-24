import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='fw-bold font-size-16' href="/">Emi Calculator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header