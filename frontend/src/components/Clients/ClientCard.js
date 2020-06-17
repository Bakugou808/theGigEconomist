import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteClient } from '../../actions/clientActions'
import ClientForm from './ClientForm'
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs'


class ClientCard extends Component {

    state = {
        edit: false,
    }

    handleClick = () => {
        this.setState(prev => ({edit: !prev.edit}))
    }
    

    render() {
        const {client} = this.props
        return (
            <div>
                <span>{client.company_name}</span>
                <span>{client.contact_name}</span>
                <span>{client.email}</span>
                <span>{client.cell}</span>
                <span>{client.venmo}</span>
                <span onClick={()=>this.props.onDeleteClient(client.id)}><BsFillTrashFill/></span>
                <button onClick={this.handleClick}><BsPencilSquare/></button>
                {this.state.edit && <ClientForm client={client} handleClick={this.handleClick}/> }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClient: (client_id) => deleteClient(client_id, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(ClientCard)