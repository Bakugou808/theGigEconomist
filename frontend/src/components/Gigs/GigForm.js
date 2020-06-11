import React, { Component } from 'react'

export default class GigForm extends Component {

    state = {
        edit: false,
        error: false,
        fields: {
            title: '',
            details: '', 
            service_type: '', 
            client_id: '',
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
            // this.props.onPatchService(this.state.fields, this.state.service_id)
        }else{
            // this.props.onPostNewService(this.state.fields)
        }
        this.props.handleClick()
    };

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
            <div className="form-group">
                <label>Client</label>
                <input className="form-control" type="name" name="client_id" value={pay_range} required onChange={this.handleChange}/>
            </div>
               <button className="btn btn-info" type="submit">Submit</button>
           </form>
       </div>
        )
    }
}
