import React from 'react';
import './App.css'
import { Route } from "react-router-dom";
// import Container from 'react-bootstrap/Container'


import Landingpage from './components/LandingPage/LandingPage'
import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar'
import ServicesContainer from '../src/components/Services/ServicesContainer'
import GigsContainer from '../src/components/Gigs/GigsContainer'
import ClientsContainer from '../src/components/Clients/ClientsContainer'
import Sidemenu from '../src/components/Sidemenu/Sidemenu'
import { fetchCurrentUser } from '../src/actions/authActions'
import { connect } from 'react-redux';
import ServiceView from '../src/components/Services/ServiceView'


class App extends React.Component {

  render() {
    const {auth} = this.props
    return (
      <div>
          <Route path="/" render={props => <NavBar {...props} /> } />
          <Route exact path="/" render={props => <Landingpage {...props} /> } />
          {auth && <Route path='/' render={props=> <Sidemenu {...props} />} />}

          <Route exact path='/home' render={props => <Homepage {...props} />}/>
          <Route path='/gigs' render={props => <GigsContainer {...props} />} />
          <Route path='/clients' render={props => <ClientsContainer {...props} />} />
          <Route exact path='/services' render={props => <ServicesContainer {...props} />} /> 
          <Route path={`/services/:serviceId`} render={props => <ServiceView {...props} />} />
          
          {/* <Route path="/" render={props => <NavBar {...props} /> } />
          {user && <Route path='/' render={props=> <Sidemenu {...props} />} />}
          
          <Route exact path='/home' render={props => <Homepage {...props} />}/>
          sidemenu routes
          <Route path='/gigs' render={props => <GigsContainer {...props} />} />
          <Route path='/clients' render={props => <ClientsContainer {...props} />} />
          <Route path='/services' render={props => <ServicesContainer {...props} />} /> */}
          
            
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
      user: state.user.data,
      auth: state.authorized.data
  }
}




export default connect(mapStateToProps)(App)
// export default AuthHOC(App)

