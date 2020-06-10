import React, { Component } from 'react'
import { api } from '../../services/api';
import { fetchUser } from '../../actions/userActions'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

class Login extends Component {

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

        this.props.onFetchUser(this.state.fields)
        this.props.history.push('/home')

        if (this.props.user){
          // this.props.history.push('/home')
          // return <Redirect to='/home'/>

        }
    }


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

const mapStateToProps = (store) => {
  return {
    user: store.user.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (userSignInData)=> fetchUser(userSignInData, dispatch), 
    // the above is for api/async calls 
    // onChangeData: (newData) => dispatch(dataChangeAction(newData))   ---> this is for normal state changes, dispatch the outcome of an action creator, just to modify state
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(Login)