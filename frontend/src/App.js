import React from 'react';
import './App.css'
import { api } from "./services/api";
import { Route } from "react-router-dom";
// import Container from 'react-bootstrap/Container'


import Landingpage from './components/LandingPage/LandingPage'
import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar'
import ServicesContainer from '../src/components/Services/ServicesContainer'
import GigsContainer from '../src/components/Gigs/GigsContainer'
import ClientsContainer from '../src/components/Clients/ClientsContainer'
import Sidemenu from '../src/components/Sidemenu/Sidemenu'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      },
      // addcss: ''
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    // console.log(token)
    
    if (token != 'undefined') {
      // console.log('there is a token');
      // make a request to the backend and find our user
      api.auth.getCurrentUser().then(user => {
        // console.log(user)
        const updatedState = { ...this.state.auth, user: {...user} };
        this.setState({ auth: updatedState });
      });
    }
  }
  
  login = (data) => {
    
    console.log(data)
    const updatedState = { ...this.state.auth, user: {...data} };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  }
 
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };
  
  setProfile = (passedProfile) => {
    this.setState({profile: passedProfile})
  }
  
  // onClick = (name) => {
  //   this.setState({addcss: name})
  // }

  render() {
    const {user} = this.state.auth
    return (
      <div>
          {/* <Navbar onClick={this.onClick} profile={this.state.profile} user={this.state.auth.user} onLogout={this.logout} /> */}
          
          <Route path="/" render={props => <NavBar {...props} user={user} onLogout={this.logout} /> } />
          {user && <Route path='/' render={props=> <Sidemenu {...props} user={user}/>} />}
          
        

          <Route exact path="/" render={props => <Landingpage {...props} onSignup={this.login} onLogin={this.login}/> } />
          <Route exact path='/home' render={props => <Homepage {...props} user={user} onLogout={this.logout} />}/>

          {/* sidemenu routes */}
          <Route path='/gigs' render={props => <GigsContainer {...props} />} />
          <Route path='/clients' render={props => <ClientsContainer {...props} />} />
          <Route path='/services' render={props => <ServicesContainer {...props} />} />
          {/* // <Route path='/maps' render={props => <ServicesContainer {...props} />} />  */}
          
            
      </div>
    );
  }
}

export default App
