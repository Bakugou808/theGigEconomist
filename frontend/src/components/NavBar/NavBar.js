import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux';

import {signOutUser} from '../../actions/userActions'
import {AuthHOC} from '../HOCs/AuthHOC'




const Styles = styled.div`
    .navbar {
        background-color: lightblue;
    }

    .nav-item {
        color: white;
        &:hover {
            color: indigo;
            cursor: pointer;
        }
    }

    
`


class NavBar extends Component {

    
    onLogout = () => {
        const {onSignOutUser, user} = this.props
        onSignOutUser(user.id)
        this.props.history.push("/")
    }

    renderBar = () => {
        if (this.props.user){
            return (
                <Styles>
                <Navbar expand="lg">
                    <Nav.Item className="navbar-item">{this.props.user.username}</Nav.Item>
                    <Nav.Item className="navbar-item" href='/'>The GigEconomist</Nav.Item>
                    {this.props.user.username && <Nav.Item onClick={this.onLogout} className="navbar-item">Sign Out</Nav.Item>}
                </Navbar>
                </Styles>
            )
        } else {
            return (
                <Styles>
                <Navbar expand="lg">
                    <Nav.Item className="navbar-item" href='/'>The GigEconomist</Nav.Item>
                </Navbar>
                </Styles>
            )
        }
    }
    

    render() {
        // const {user} = this.props
        console.log("in navbar ")
        return (
            <Styles>{this.renderBar()}</Styles>
            
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
      onSignOutUser: (userId)=> dispatch(signOutUser(userId)) 
      // the above is for api/async calls 
      // onChangeData: (newData) => dispatch(dataChangeAction(newData))   ---> this is for normal state changes, dispatch the outcome of an action creator, just to modify state
    }
  }

// export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)