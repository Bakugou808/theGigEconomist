import React, { Component } from 'react'
import { Route } from "react-router-dom";

import ServicesList from './ServicesList'
import { AuthHOC } from '../HOCs/AuthHOC'
import NewServiceForm from './NewServiceForm'
import ServiceView from './ServiceView'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


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
                        <Card 
                        border='warning'
                        bg="info"
                        text={'info' === 'light' ? 'dark' : 'white'}
                        style={subCardStyle}
                        >
                            <Card.Header>Services</Card.Header>
                        </Card>
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
                        <ServicesList history={history} match={match} showForm={this.handleClick}/>
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
                    {this.state.form && <NewServiceForm handleClick={this.handleClick}/>}
                </div>
                <Row>
                    <Col>
                        <Row className="#ofGigsForService">
                            ofGigsForService
                        </Row>
                        <Row className="totalEarnedVsProjectedForService">
                            totalEarnedVsProjectedForService
                        </Row>
                        <Row className="AverageMonthlyIncomeFromService">
                            AverageMonthlyIncomeFromService
                        </Row>

                    </Col>
                </Row>
            </Container>
            
        )
    }
}


export default AuthHOC(ServicesContainer)