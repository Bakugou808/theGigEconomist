 import React, { Component } from 'react'

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


 export default class AppointmentView extends Component {

     render() {
         const {appointment} = this.props
         const cardStyle = {
            "margin": '10px',
        }
        const titleStyle = {
           "width": 'auto'
        }
         return (
             <div>
                 <Card bg={'info'}
                  // key={service.id}
                  border='warning'
                  style={cardStyle}
                  text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}>
                    <Row border='warning'>
                    <Col style={titleStyle}>
                        {appointment.title}
                     </Col>
                     <Col>
                        {appointment.date_of_appointment}
                     </Col>
                     <Col>
                        {/* {appointment.completed} */}add completed to schema
                     </Col>
                     <Col>
                        {appointment.payment_amount}
                     </Col>
                     <Col>
                        {appointment.time_of_appointment}
                     </Col>
                     <Col>
                        {appointment.location}
                     </Col>
                     <Col>
                        {appointment.duration}
                     </Col>
                    </Row>
                     
                 </Card >
             </div>
         )
     }
 }
 