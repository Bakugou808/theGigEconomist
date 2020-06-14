import React, { Component } from 'react'
import { connect } from "react-redux";
import {AuthHOC} from '../HOCs/AuthHOC'
import { fetchClients } from '../../actions/clientActions';
import { fetchServices } from '../../actions/serviceActions'

const user_id = localStorage.userId

class Homepage extends Component {

    componentDidMount(){
        const {onFetchServices, onFetchClients} = this.props 
        
        onFetchClients(user_id)
        onFetchServices(user_id)

    }

    render() {
        const {match} = this.props
        return (
            <div>
                
{/* 
                {<Route path='/' render={props=> <Sidemenu {...props} />} />}
                <Route path='/gigs' render={props => <GigsContainer {...props} />} />
                <Route path='/clients' render={props => <ClientsContainer {...props} />} />
                <Route path='/services' render={props => <ServicesContainer {...props} />} /> */}
                HOMEPAGE
                {/* <Sidemenu/> */}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchServices: (user_id) => fetchServices(user_id, dispatch),
        onFetchClients: (user_id) => fetchClients(user_id, dispatch)
    }
}

export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(Homepage))
// export default Homepage
