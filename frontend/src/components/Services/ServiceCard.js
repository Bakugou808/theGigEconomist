import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'


import { connect } from 'react-redux'
import { deleteService } from '../../actions/serviceActions'
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
       const {service, onDeleteService, match, redirect} = this.props
       if(redirect) {return <Redirect to={`${match.url}/${service.id}`} service={service}/>}
        return (
        <div>
            <span onClick={this.handleView}>
                {`${service.title} ${service.pay_range} ${service.description} `}
            </span>
             {/* <Link to={`${match.url}/${service.id}`}>
                {`${service.title} ${service.pay_range} ${service.description} `}
            </Link> */}
            
            <Route path={`/services/:serviceId`} render={props => <ServiceView {...props} />} />

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
        onDeleteService: (serviceId) => deleteService(serviceId, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(ServiceCard)