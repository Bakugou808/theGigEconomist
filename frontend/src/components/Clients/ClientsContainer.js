import React, { Component } from 'react'
import { AuthHOC } from '../HOCs/AuthHOC'
import ClientsList from './ClientsList'
import ClientForm from './ClientForm'

class ClientsContainer extends Component {

    state = {
        addClient: false,
    }

    addClient = () => {
        this.setState(prev => ({addClient: !prev.addClient}))
    }
    

    render() {
        return (
            <div>
                I am the container of clients
                <button onClick={this.addClient}>Add Client</button>
                {this.state.addClient && <ClientForm handleClick={this.addClient}/>}
                <ClientsList />
            </div>
        )
    }
}

export default AuthHOC(ClientsContainer)