import React, { Component } from 'react'
import { AuthHOC } from '../HOCs/AuthHOC'
import ClientsList from './ClientsList'

class ClientsContainer extends Component {
    render() {
        return (
            <div>
                I am the container of clients   
                <ClientsList />
            </div>
        )
    }
}

export default AuthHOC(ClientsContainer)