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

    renderCompletedAppointments = () => {
        const {appointments, closeForm} = this.props
        return appointments.completed.map(appointment => <AppointmentView  appointment={appointment}/>)
    }
    
    renderIncompleteAppointments = () => {
        const {appointments, closeForm} = this.props
        return appointments.incomplete.map(appointment => <AppointmentView  appointment={appointment}/>)
    }

     render() {
         const {appointments} = this.props
         return (
             <div>
                 {appointments.incomplete && this.renderIncompleteAppointments()}
                 {appointments.completed && this.renderCompletedAppointments()}
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