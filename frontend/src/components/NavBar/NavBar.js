import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'


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


export default class NavBar extends Component {

    state = {
        flag: true
    }

    onLogout = () => {
        const {onLogout} = this.props 
        onLogout()
        
        this.props.history.push("/")
    }



    render() {
        const {username} = this.props.user
        return (

            <Styles>
                <Navbar expand="lg">
                    {/* <Navbar.Toggle aria-controls="basic-sidebar-nav" /> */}

                    <Nav.Item className="navbar-item">{username}</Nav.Item>
                    <Nav.Item className="navbar-item" href='/'>The GigEconomist</Nav.Item>
                    
                    
                    {username && <Nav.Item onClick={this.onLogout} className="navbar-item">Sign Out</Nav.Item>}
                 
                    {/* <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/gigs">Gigs</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/clients">Clients</Nav.Link></Nav.Item> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto'>
                            
                            <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/gigs">Gigs</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/clients">Clients</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse> */}
                </Navbar>
            </Styles>





            // <nav>
            //     The GigEconomist
            //     <div>
            //         {username && <div>Welcome {username}</div>  }
            //     {
            //         username ? <button className="ml-3 mb-1 option btn btn-outline-danger" onClick={this.onLogout}>SIGN OUT</button> : null
            //     }   
            //     </div>
            // </nav>
        )
    }
}
