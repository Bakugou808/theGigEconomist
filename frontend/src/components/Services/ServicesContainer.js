import React, { Component } from 'react'
import { Route } from "react-router-dom";
import {connect} from 'react-redux'

import ServicesList from './ServicesList'
import { AuthHOC } from '../HOCs/AuthHOC'
import NewServiceForm from './NewServiceForm'
import ServiceCard from './ServiceCard'
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


class ServicesContainer extends Component {

    state = {
        form: false,
    }

    handleClick = () => {
        this.setState(prev => ({form: !prev.form}))
    }
    

    render() { 
        const {history, match} = this.props
        const subCardStyle = {
            'width': '100',
            // 'margin': '5px'
        }
        return (
            <Container >
                <Row> 
                    <Col md={9}>

                        <ServicesList history={history} match={match} showForm={this.handleClick}/>
                    </Col>
                    <Col>
                        <Card 
                            border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}
                        >
                            <Card.Header>This Months Earnings: $3,000</Card.Header>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={9}  >
                        <Card 
                        border='warning'
                        bg="info"
                        text={'info' === 'light' ? 'dark' : 'white'}
                        style={subCardStyle}
                        >
                            <Card.Header>Service</Card.Header>
                            {this.props.selectedService.id && <Card border='warning' bg="info"
                                text={'info' === 'light' ? 'dark' : 'white'}
                                style={subCardStyle}><ServiceCard service={this.props.selectedService} match={match} history={history} /></Card>}
                        </Card>
                       
                    </Col>
                    <Col>
                        <Card 
                            border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}
                        >
                            <Card.Header>Total Earnings: $3,000</Card.Header>
                        </Card>
                    </Col>
                </Row> 
 
                <div>
                <Button size='sm' variant='outline-warning' onClick={this.handleClick}>+</Button>
                    {/* {this.state.form && <NewServiceForm handleClick={this.handleClick}/>} */}
                    {this.state.form && <Modal show={this.state.form} onHide={this.handleClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Service Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><NewServiceForm handleClick={this.handleClick}/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClick}>Close</Button>
                        </Modal.Footer>
                    </Modal>}
                </div>
                {/* stats for selected Service */}
                <Row>
                    <Col md={9}>
                        <Row className="#ofGigsForService">
                            <Col md={12}>
                            <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                                <Card.Header><Card.Title>Gigs For Service</Card.Title></Card.Header>
                                <Card.Body>ADD GRAPH COMPONENT</Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        <Row className="totalEarnedVsProjectedForService">
                            <Col md={12}>
                            <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                                <Card.Header><Card.Title>Earned vs. Projected For Service</Card.Title></Card.Header>
                                <Card.Body>ADD GRAPH COMPONENT</Card.Body>
                            </Card>       
                            </Col>
                        </Row>
                        <Row className="AverageMonthlyIncomeFromService">
                            <Col md={12}>
                            <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                                <Card.Header><Card.Title>Avg Monthly Income From Service</Card.Title></Card.Header>
                                <Card.Body>ADD GRAPH COMPONENT</Card.Body>
                            </Card>     
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            
        )
    }
}

const mapStateToProps = (store) => {
    return {
        selectedService: store.services.selectedService
    }
}


export default AuthHOC(connect(mapStateToProps)(ServicesContainer))