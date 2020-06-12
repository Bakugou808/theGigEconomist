import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postNewGig, patchGig } from '../../actions/gigActions'
import Autocomplete from './Autocomplete'

class GigForm extends Component {

    state = {
        edit: false,
        error: false,
        fields: {
            title: '',
            details: '', 
            service_type: '', 
            client_id: '',
            service_id: '',
            completed: false,
            // amount_due: 
            // user_id: this.props.user.id,
        },
        clients: []
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({fields: newFields})
    }
    

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.edit){
            // this.props.onPatchGig(this.state.fields, this.props.service.id)
        }else{
            this.props.onPostNewGig(this.state.fields)
        }
        this.props.closeForm()
    };

    suggestions = () => {
        const {clients} = this.props 
        const suggestions = clients.map(client=> `${client.company_name} - ${client.contact_name}`)
        return suggestions
    }

    setClient = (clientInfo) => {
        const {clients, service} = this.props 
        const comp_contact = clientInfo.split(' - ')
        
        const client = clients.filter(client => client.company_name === comp_contact[0] && client.contact_name === comp_contact[1] )[0]
        
        if(client.id){
            this.setState(prev => ({fields: {...prev.fields, client_id: client.id, service_type: service.title, service_id: service.id}}))
            // this.setState({fields: {}client_id: client.id, service_type: service.title})
        }
    }
    
    

    render() {
        const {title, details, client_id} = this.state.fields 

        return (
            <div>
            {this.state.error ? <h1>Try again...</h1> : null}
           <form className="signup-form" onSubmit = {this.handleSubmit}>
             <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="name" name="title" value={title} required onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Details</label>
                <input className="form-control" type="name" name="details" value={details} required onChange={this.handleChange}/>
            </div>
            {/* <div className="form-group">
                <label>Client</label>
                <input className="form-control" type="name" name="client_id" value={client_id} required onChange={this.handleChange}/>
            </div> */}
            <div className="form-group">
                <label>Client</label>
                <Autocomplete suggestions={this.suggestions()} setClient={this.setClient} />
            </div>

               <button className="btn btn-info" type="submit">Submit</button>
           </form>
       </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        clients: store.clients.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostNewGig: (gigData) => postNewGig(gigData, dispatch),
        onPatchGig: (gigData, gigId) => patchGig(gigData, gigId, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GigForm)