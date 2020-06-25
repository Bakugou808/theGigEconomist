import React, { Component } from 'react'
import { Route } from "react-router-dom";
import {connect} from 'react-redux'

import ServicesList from './ServicesList'
import GigsForService from '../Stats/GigsForService'
import { AuthHOC } from '../HOCs/AuthHOC'
import NewServiceForm from './NewServiceForm'
import ServiceCard from './ServiceCard'
import ServiceEarnedVsProjected from '../Stats/ServiceEarnedVsProjected'
import InfoCardGigsForService from '../Stats/InfoCardGigsForService'
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
import InfoCardEarnedVsProj from '../Stats/InfoCardEarnedVsProj';
import TaxesForService from '../Stats/TaxesForService';
import InfoCardTaxesForService from '../Stats/InfoCardTaxesForService';
import { clearServiceState } from '../../actions/statsActions'



class ServicesContainer extends Component {

    state = {
        form: false,
    }

    handleClick = () => {
        this.setState(prev => ({form: !prev.form}))
    }

    componentDidMount(){
        this.props.onClearStore()
    }
    

    render() { 
        const {history, match, selectedService, earnedVsProjected} = this.props
        const subCardStyle = {
            'width': '100',
            'margin': '10px'
        }
        const cardStyle = {
            "margin": '10px',
        }

        const statStyle = {
            'align-items': 'center',
            'justify-content': 'center',
            'display': 'flex',
            'width': '100%',
            'height': '100%',
            'margin': '10px'
        }
        return (
            
            <Container >
                <Row>
                    <Col md={9} >

                        <ServicesList history={history} match={match} handleClick={this.handleClick} showForm={this.handleClick} />
                    </Col>

                    <Col>
                        {earnedVsProjected.earned && <Card
                            border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}
                        >
                            <Card.Header>This Months Earnings From {selectedService.title}: ${earnedVsProjected.earned.sum}</Card.Header>
                        </Card>}
                    </Col>
                </Row>

                <Row>
                    <Col md={9}  >
                        <Button size='sm' variant='outline-warning' onClick={this.handleClick} >+</Button>
                        {this.props.selectedService.id && <Card border='warning' bg="info"
                            text={'info' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}><ServiceCard service={this.props.selectedService} match={match} history={history} /></Card>}
                    </Col>
                </Row>

                <div>
                    {this.state.form && <Modal show={this.state.form} onHide={this.handleClick}>
                        <Modal.Header closeButton>
                            <Modal.Title>Service Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><NewServiceForm handleClick={this.handleClick} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClick}>Close</Button>
                        </Modal.Footer>
                    </Modal>} 
                </div>
                <Row className="#ofGigsForService">
                    <Col md={9}>
                        <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                            <Card.Header><Card.Title>Gigs For Service</Card.Title></Card.Header>
                            <Row>
                                <Col md={9}>
                                <Card.Body style={subCardStyle}>{selectedService.id && <GigsForService />}</Card.Body>
                                </Col>
                                <Col>{selectedService.id && <InfoCardGigsForService />}</Col>
                            </Row>
                            
                        </Card>
                        
                        
                    </Col>
                    <Col>{selectedService.id && <InfoCardGigsForService />}</Col>
                </Row>
                <Row className="totalEarnedVsProjectedForService">
                    <Col md={9}>
                        <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                            <Card.Header><Card.Title>Earned vs. Projected For Service</Card.Title></Card.Header>
                            <Card.Body style={statStyle}>{selectedService.id && <ServiceEarnedVsProjected />}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {selectedService.id && <InfoCardEarnedVsProj />}
                    </Col>
                </Row>
                <Row className="AverageMonthlyIncomeFromService">
                    <Col md={9}>
                        <Card border='info'
                            bg="warning"
                            text={'warning' === 'light' ? 'dark' : 'white'}
                            style={subCardStyle}>
                            <Card.Header><Card.Title>Taxes For Service</Card.Title></Card.Header>
                        <Card.Body style={statStyle}>{selectedService.id && <TaxesForService />}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {selectedService.id && <InfoCardTaxesForService />}
                    </Col>
                </Row>

            </Container>
            
        )
    }
}

const mapStateToProps = (store) => {
    return {
        selectedService: store.services.selectedService,
        earnedVsProjected: store.stats.serviceStats.earnedVsProjected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClearStore: () => dispatch(clearServiceState())
    }
}

export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(ServicesContainer))