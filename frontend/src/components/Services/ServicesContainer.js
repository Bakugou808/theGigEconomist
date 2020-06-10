import React, { Component } from 'react'
import { Route } from "react-router-dom";

import ServicesList from './ServicesList'
import { AuthHOC } from '../HOCs/AuthHOC'
import NewServiceForm from './NewServiceForm'
import ServiceView from './ServiceView'

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
            <div>
                I am the container of the Services
                <button onClick={this.handleClick}>Add A Service</button>
                {this.state.form && <NewServiceForm handleClick={this.handleClick}/>}
                <ServicesList history={history} match={match}/> 
                {/* <Route exact path={`${match.url}/:serviceId`} render={props => <ServiceView {...props} />} /> */}
            </div>
        )
    }
}


export default AuthHOC(ServicesContainer)