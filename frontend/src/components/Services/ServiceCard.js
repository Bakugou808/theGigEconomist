import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'


import { connect } from 'react-redux'
import { deleteService } from '../../actions/serviceActions'
import { selectService } from '../../actions/serviceActions'

import { setGigsForService } from '../../actions/gigActions'
import NewServiceForm from '../Services/NewServiceForm'
import ServiceView from '../Services/ServiceView'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class ServiceCard extends Component {

    state = {
        edit: false, 
        redirect: false,
    }

    handleEdit = () => {
        this.setState(prev => ({edit: !prev.edit}))
    }

    handleView = () => {
        this.setState(prev => ({redirect: !prev.redirect}))
    }
    
    

    render(){
       const {service, onDeleteService, match, history, onSetGigsForService, onSelectService} = this.props

       const location = {
           pathname: `${match.url}/${service.id}`,
           state: { service: service}
       }

       const titleStyle = {
           "font-size": '23px'
       }

       const cardStyle = {
           "margin": '10px',
       }



       if(this.state.redirect) {
            history.push(location)
            history.replace(location)
            onSetGigsForService(service.gigs)
            onSelectService(service)
            // redirects to serviceView component
            return <Redirect to={location}/>}
        return (

            <div style={cardStyle}>
                <Container>
                    <Row> 
                        <Col><div style={titleStyle} onDoubleClick={this.handleView} onClick={this.showStats}>{service.title}</div></Col>
                    </Row>
                    <Row >
                        <Col>{`Pay Range: ${service.pay_range}`}</Col>
                        <Col>{`Description: ${service.description}`}</Col>
                        <Col md={{ span: 3, offset: 1 }} >
                            <Button variant='outline-warning' size='sm' onClick={this.handleEdit}>Edit</Button>
                            <Button variant='outline-warning' size='sm' onClick={()=> onDeleteService(service.id)}>Delete</Button>
                        </Col>
                    </Row>
                </Container>
                <div>
                    {this.state.edit && <NewServiceForm service={service} handleClick={this.handleEdit}/>}
                </div>
            </div>
    )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onDeleteService: (serviceId) => deleteService(serviceId, dispatch),
        onSetGigsForService: (gigsList) => dispatch(setGigsForService(gigsList)),
        onSelectService: (service) => dispatch(selectService(service))
    }
}


export default connect(null, mapDispatchToProps)(ServiceCard)