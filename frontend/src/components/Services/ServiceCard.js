import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'


import { connect } from 'react-redux'
import { deleteService } from '../../actions/serviceActions'
import { setGigsForService } from '../../actions/gigActions'
import NewServiceForm from '../Services/NewServiceForm'
import ServiceView from '../Services/ServiceView'


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
       const {service, onDeleteService, match, history, onSetGigsForService} = this.props

       const location = {
           pathname: `${match.url}/${service.id}`,
           state: { service: service}
       }

       if(this.state.redirect) {
            history.push(location)
            history.replace(location)
            onSetGigsForService(service.gigs)
            // redirects to serviceView component
            return <Redirect to={location}/>}
        return (
        <div>
            <span onClick={this.handleView}>
                {`${service.title} ${service.pay_range} ${service.description} `}
            </span>
             
            

            <span onClick={()=> onDeleteService(service.id)}>X</span>
            <button onClick={this.handleEdit}>Edit</button>
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
        onSetGigsForService: (gigsList) => dispatch(setGigsForService(gigsList))
    }
}


export default connect(null, mapDispatchToProps)(ServiceCard)