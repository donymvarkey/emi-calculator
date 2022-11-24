import React from 'react'
import { Card, Col, Row, Stack } from 'react-bootstrap'

const EmiInfo = ({ interest, emi, total }) => {
    return (
        <Card className='border-0 shadow-sm my-3'>
            <Card.Header>
                <Card.Title className='fw-bold text-center'>EMI Details</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Stack className='text-center'>
                            <h6 className='fw-bold'>Interest</h6><hr />
                            <span>₹{interest}</span>
                        </Stack>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Stack className='text-center'>
                            <h6 className='fw-bold'>Total Amount</h6><hr />
                            <span>₹{total}</span>
                        </Stack>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Stack className='text-center'>
                            <h6 className='fw-bold'>EMI Amount per month</h6><hr />
                            <span>₹{emi}</span>
                        </Stack>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default EmiInfo