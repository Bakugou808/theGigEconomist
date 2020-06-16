import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AuthHOC } from '../HOCs/AuthHOC'
import AppointmentsList from './AppointmentsList'
import AppointmentForm from './AppointmentForm'

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


export default class AppointmentContainer extends Component {

    state = {
        form: false,
    }

    showForm = () => {
        this.setState(prev=>({form: !prev.form}))        
    }
    
    render() {
        return (
            <div>
                <AppointmentsList />
                <Button onClick={this.showForm}>+ Appointment</Button>
                {this.state.form && <AppointmentForm closeForm={this.showForm}/>}
            </div>
        )
    }
}
