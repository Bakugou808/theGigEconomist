 import React, { Component } from 'react'
import AppointmentView from './AppointmentView'
 import { connect } from 'react-redux'
import { AuthHOC } from '../HOCs/AuthHOC'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

 
class AppointmentsList extends Component {

    renderAppointments = () => {
        const {appointments} = this.props
        return appointments.map(appointment => <AppointmentView appointment={appointment}/>)
    }
    

     render() {
         return (
             <div>
                 {this.renderAppointments()}
             </div>
         )
     }
 }

 const mapStateToProps = (store) => {
     return {
         appointments: store.appointments.appointmentsForGig
     }
 }

 const mapDispatchToProps = (store) => {
    return {
        
    }
}
 
 export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsList)