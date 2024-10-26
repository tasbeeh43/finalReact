import React, { Component } from 'react'
import Navbar from './Home/Navbar'
import Main from './Home/Main'
import Footer from './Home/Footer'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { Button } from 'react-scroll'
class App extends Component {
 
      
        render() {
        return (
          <div>
          <h1>
          <Navbar/>
          <Main/>
          <Footer/>
        <Container>
          <Row>
            <Col md="4" className='text-center md-8'>
            <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
            </Col>
            <Col md="4" className='text-center md-8'>
            <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
            </Col>
            <Col md="4" className='text-center md-8'>
            <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
            </Col>
          </Row>
        </Container>
          </h1>
          </div>
        )
      }
    }

export default App