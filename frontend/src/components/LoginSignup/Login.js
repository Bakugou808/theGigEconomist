import React, { Component } from 'react'
import { api } from '../../services/api';

export default class Login extends Component {

    state = {
        error: false,
        fields: {
          username: '',
          password: ''
        }
    } 

    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        api.auth.login(this.state.fields).then(res => {
          if (!res.error) {
            // const updatedState = { ...this.state.auth, user: res };
            this.props.onLogin(res);
            this.props.history.push('/home');
          } else {
            this.setState({ error: true });
          }
        });
    };f
    
    

    render() {
        const {username, password} = this.state.fields
        return (
            <div>
                 {this.state.error ? <h1>Try again...</h1> : null}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" type="text" name="username" value={username} required onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" name="password" value={password} required onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-info" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
