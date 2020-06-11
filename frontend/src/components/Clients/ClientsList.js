import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClients } from '../../actions/clientActions'
import ClientCard from './ClientCard'

const user_id = localStorage.userId

class ClientsList extends Component {

    componentDidMount(){
        const {id} = this.props.user
        this.props.onFetchClients(user_id)
    }

    renderClients = () => {
        const {data} = this.props.clients
        return data.map(client => <ClientCard client={client} /> )
    }
    

    render() {
        return (
            <div>
                clients list
                {this.props.clients.data && this.renderClients()}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        clients: store.clients,
        user: store.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchClients: (user_id) => fetchClients(user_id, dispatch)
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)