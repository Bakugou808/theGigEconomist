import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AuthHOC } from '../HOCs/AuthHOC'
import GigsList from '../Gigs/GigsList'
import GigView from '../Gigs/GigView'
import GigForm from '../Gigs/GigForm'
import AppointmentContainer from '../Appointments/AppointmentContainer'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


class ServiceView extends Component {

    
    state = {
        new_gig: false,

    }
    

    addGig = () => {
        this.setState(prev => ({new_gig: !prev.new_gig}))
    }
    
    

    render() { 
        const {service} = this.props.location.state
        const {thisService, selectedGig} = this.props
        const cardStyle = {
            "margin": '10px',
        }
        return (

            <Container>
                <Row>
                    <Col md={9}>
                        <Card
                            bg={'info'}
                            // key={service.id}
                            border='warning'
                            style={cardStyle}
                            text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                        >
                            <GigsList gigs={this.props.location.state.service.gigs} service={service} />
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>total made this month</Card.Header>
                        </Card>
                        <Card>
                            <Card.Text>Total Earnings for service to Date</Card.Text>
                            <Card.Text>Projected Earnings for service</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                   <Card 
                            bg={'info'}
                            // key={service.id}
                            border='warning'
                            style={cardStyle}
                            text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                        >
                            <Card.Header>
                                {!selectedGig.title ? <Row><Card.Title>`*******************`</Card.Title></Row> : <Container>
                                    <Row>
                                    <Col><Card.Title>{selectedGig.title}</Card.Title></Col>
                                    <Col>Client: {selectedGig.client && selectedGig.client.company_name}</Col>
                                    <Col>Contact: {selectedGig.client && selectedGig.client.contact_name}</Col>
                                    </Row>
                                </Container>}
                            </Card.Header>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Card
                                    bg={'info'}
                                    // key={service.id}
                                    border='warning'
                                    style={cardStyle}
                                    text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                                >
                                    {!selectedGig.title ? `*********************` : <Row>
                                        <Col md={9}>
                                            <Card.Body><GigView /></Card.Body>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Text>Total Earnings for gig to Date</Card.Text>
                                                <Card.Text>Projected Earnings for gig</Card.Text>
                                            </Card>
                                        </Col>
                                    </Row>}
                                    {!selectedGig.title ? `*********************` : <Row>
                                            <Col>
                                                <Card
                                                    bg={'info'}
                                                    // key={service.id}
                                                    border='warning'
                                                    style={cardStyle}
                                                    text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                                                >
                                                    Appointments Component
                                                    <AppointmentContainer />
                                                </Card>
                                            </Col>
                                        </Row>}
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant='info' onClick={this.addGig}>+</Button>

                    <Modal show={this.state.new_gig} onHide={this.addGig}> 
                        <Modal.Header closeButton>
                            <Modal.Title>Gig Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <GigForm closeForm={this.addGig} service={service} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.addGig}>
                                Close
                            </Button>
                            {/* <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (store) => {
    return { 
        services: store.services,
        thisService: store.services.selectedService,
        gigs: store.gigs,
        selectedGig: store.gigs.selectedGig,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchServices: (userId) => fetchServices(userId, dispatch)
    }
}


export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(ServiceView))
