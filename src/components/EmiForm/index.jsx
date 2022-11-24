import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { calculateEmi } from '../../services/calculateEmi'
import EmiInfo from '../EmiInfo'
import RequiredMark from '../RequiredMark'

const EmiForm = () => {
  const [values, setValues] = useState({
    price: "",
    interest: "",
    tenure: ""
  })
  const [totalAmount, setTotalAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [emiAmount, setEmiAmout] = useState("");
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

  }
  const handleClick = () => {
    const { total, emi, interest } = calculateEmi(values.price, values.interest, values.tenure)
    setTotalAmount(total);
    setInterest(interest);
    setEmiAmout(emi)
  }
  const handleReset = () => {
    setTotalAmount("");
    setEmiAmout("");
    setValues({
      price: "",
      interest: "",
      tenure: ""
    })
  }
  return (
    <React.Fragment>
      <div className='d-flex align-items-center justify-content-center'>
        <Card className='border-0 shadow-sm p-3 my-2 w-50'>
          <Card.Body>
            <Form>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="commodityPrice">
                    <Form.Label>Price<RequiredMark /></Form.Label>
                    <Form.Control type="text" placeholder="Total Price" required name="price" value={values.price} onChange={handleOnChange} />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="interestRate">
                    <Form.Label>Interest Rate<RequiredMark /></Form.Label>
                    <Form.Control type="text" placeholder="Interest Rate" required name="interest" value={values.interest} onChange={handleOnChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="interestRate">
                <Form.Label>Tenure<RequiredMark /></Form.Label>
                <Form.Control type="text" placeholder="Tenure" required name="tenure" value={values.tenure} onChange={handleOnChange} />
              </Form.Group>
              <Button className="me-2" onClick={handleClick} variant="primary">
                Submit
              </Button>
              <Button onClick={handleReset} type="reset" variant="outline-danger">
                Reset
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      {
        emiAmount && totalAmount && <EmiInfo interest={interest} emi={emiAmount} total={totalAmount} />
      }
    </React.Fragment>
  )
}

export default EmiForm