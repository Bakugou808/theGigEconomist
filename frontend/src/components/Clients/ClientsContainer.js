import React, { Component } from 'react'
import { AuthHOC } from '../HOCs/AuthHOC'

class ClientsContainer extends Component {
    render() {
        return (
            <div>
                I am the container of clients   
            </div>
        )
    }
}

export default AuthHOC(ClientsContainer)