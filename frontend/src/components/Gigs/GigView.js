import React, { Component } from 'react'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

class GigView extends Component {


    render() { 
        
        return (
            <Container>
                <Row>
                    <Col>
                    {this.props.gig.title}
                    </Col>
                    <Col>
                    payment Amount:
                    </Col>
                    <Col>Completed: {this.props.gig.completed}</Col>
                </Row>
                <Row>
                    <Col>
                    {this.props.client && `Company: ${this.props.client.company_name}`}
                    </Col>
                    <Col>Service Type: {this.props.gig.service_type}</Col>
                    <Col>{this.props.client && `Venmo: ${this.props.client.venmo}`}</Col>
                </Row>
                <Row>
                    <Col>{this.props.client && `Contact: ${this.props.client.contact_name}`}</Col>
                    <Col>{this.props.client && `Email: ${this.props.client.email}`}</Col>
                    <Col>{this.props.client && `Cell: ${this.props.client.cell}`}</Col>
                </Row>
                <Row><Col>Details: {this.props.gig.details}</Col></Row>
            </Container>
            // <div>
            //     {`${this.props.gig.title}
            //     ${this.props.gig.service_type}
            //     ${this.props.client && this.props.client.company_name}
            //     ${this.props.client && this.props.client.contact_name}
            //     ${this.props.client && this.props.client.email}
            //     ${this.props.client && this.props.client.cell}
            //     ${this.props.client && this.props.client.venmo}
            //     payment amount:
            //     ${this.props.gig.completed}
            //     ${this.props.gig.details}`}

            // </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        gig: store.gigs.selectedGig,
        client: store.gigs.selectedGig.client
    }
}


export default connect(mapStateToProps)(GigView)