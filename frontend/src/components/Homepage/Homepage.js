import React, { Component } from 'react'
import { Route } from "react-router-dom";
import {AuthHOC} from '../HOCs/AuthHOC'
import NavBar from '../NavBar/NavBar'
import ServicesContainer from '../Services/ServicesContainer'
import GigsContainer from '../Gigs/GigsContainer'
import ClientsContainer from '../Clients/ClientsContainer'
import Sidemenu from '../Sidemenu/Sidemenu'


class Homepage extends Component {
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

export default AuthHOC(Homepage)
// export default Homepage
