import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'


import { connect } from 'react-redux'
import { deleteService } from '../../actions/serviceActions' 
import { selectService } from '../../actions/serviceActions'
import {fetchServicesMonthsGigs, fetchServiceEarnedVsProj } from '../../actions/statsActions'


import { setGigsForService } from '../../actions/gigActions'
import NewServiceForm from '../Services/NewServiceForm'
import ServiceView from '../Services/ServiceView'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs'




class ServiceCard extends Component {

    state = {
        edit: false, 
        redirect: false,
    }

    handleEdit = () => {
        this.setState(prev => ({edit: !prev.edit}))
    }

    handleRedirect = () => {
        this.setState(prev => ({redirect: !prev.redirect}))
    }
    
    handleView = () => {
        this.props.onSelectService(this.props.service)
        this.props.onGetMonthsGigs(this.props.service.id)
        this.props.onEarnedVsProj(this.props.service.id)
    }
    
    

    render(){
       const {service, onDeleteService, match, history, onSetGigsForService, onSelectService} = this.props

       const location = {
           pathname: `${match.url}/${service.id}`,
           state: { service: service}
       }

       const titleStyle = {
           "font-size": '23px',
           'cursor': 'pointer'
       }

       const cardStyle = {
           "margin": '10px',
       }

       const descStyle = {
           "padding-top":'10px'
       }
       const payStyle = {
        "padding-top":'5px'
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

                    <Row >
                        <Col><div style={titleStyle} onClick={this.handleView} onDoubleClick={this.handleRedirect} >{service.title}</div></Col>
                        <Col style={payStyle}>{`Pay Range: ${service.pay_range}`}</Col>
                        
                        <Col md={{ span: 3, offset: 1 }} >
                            <Button variant='outline-warning' size='sm' onClick={this.handleEdit}><BsPencilSquare/></Button>
                            <Button variant='outline-warning' size='sm' onClick={()=> onDeleteService(service.id)}><BsFillTrashFill/></Button>
                        </Col>
                    </Row>
                    <Row>
                    <Col style={descStyle}>{`Description: ${service.description}`}</Col>
                    </Row>
                    {/* <Col>{`Description: ${service.description}`}</Col> */}
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
        onSelectService: (service) => dispatch(selectService(service)),
        onGetMonthsGigs: (serviceId) => fetchServicesMonthsGigs(serviceId, dispatch),
        onEarnedVsProj: (serviceId) => fetchServiceEarnedVsProj(serviceId, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(ServiceCard)