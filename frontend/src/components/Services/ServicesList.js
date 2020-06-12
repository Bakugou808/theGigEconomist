import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServiceCard from './ServiceCard'
import { fetchServices } from '../../actions/serviceActions'

const userId = localStorage.userId

class ServicesList extends Component {

    componentDidMount(){
        this.props.onFetchServices(userId)
    }

    renderServices = () => {
        const {match, history} = this.props
        return this.props.services.data.map(service => <ServiceCard service={service} match={match} history={history} />)
    }
      
 
    render() {
        return (
            <div>
                I am the list of services
                {this.props.services.data && this.renderServices()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { services: state.services}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchServices: (userId) => fetchServices(userId, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)