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


class ServicesContainer extends Component {

    state = {
        form: false,
    }

    handleClick = () => {
        this.setState(prev => ({form: !prev.form}))
    }
    

    render() { 
        const {history, match} = this.props
        return (
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 3 }}>I am the container of the Services</Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 2}} > <ServicesList history={history} match={match} showForm={this.handleClick}/> </Col>
                </Row>
                <div>
                <Button size='sm' variant='outline-warning' onClick={this.handleClick}>+</Button>
                    {this.state.form && <NewServiceForm handleClick={this.handleClick}/>}
                
                </div>
            </Container>
            
        )
    }
}


export default AuthHOC(ServicesContainer)