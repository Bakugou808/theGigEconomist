 import React, { Component } from 'react'
 import {connect} from 'react-redux'
import { patchAppointment, deleteAppointment } from '../../actions/appointmentsActions'
import AppointmentForm from './AppointmentForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { BsPencilSquare, BsFillTrashFill, BsCheckBox } from 'react-icons/bs'



class AppointmentView extends Component {

   state = {
      edit: false,
   }

   handleEdit = () => {
      this.setState(prev => ({edit: !prev.edit}))
   }

   handleComplete = () => {
      const {onPatchAppointment, appointment} = this.props
      let fields = {title: appointment.title, payment_amount: appointment.payment_amount, notes: appointment.notes, location: appointment.location, gig_id: appointment.gig_id, end_of_appointment: appointment.end_of_appointment, time_of_appointment: appointment.time_of_appointment, completed: true}

      onPatchAppointment(fields, appointment.id)
   }
   

     render() {
         const {appointment, closeForm} = this.props
         const cardStyle = {
            "margin": '10px', 
        }
        const titleStyle = {
           "width": 'auto'
        }
        const textStyle = {
           'margin': '10px'
        }
         return (
             <div>
                 <Card bg={'info'}
                  // key={service.id}
                  border='warning'
                  style={cardStyle}
                  text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}>
                    <Row border='warning'>
                    <Col style={textStyle} >
                        {appointment.title}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.date_of_appointment}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.completed ? "Paid" : "Not Paid"}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.payment_amount}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.time_of_appointment}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.location}
                     </Col>
                     <Col style={textStyle}>
                        {appointment.duration}
                     </Col>
                     <Col style={textStyle}>
                        <Row>
                        <Button variant='outline-warning' size='sm' onClick={this.handleEdit} ><BsPencilSquare/></Button>
                        <Button variant='outline-warning' size='sm' onClick={()=>this.props.onDeleteAppointment(appointment.id)}><BsFillTrashFill/></Button>
                        <Button variant='outline-warning' size='sm' onClick={this.handleComplete}><BsCheckBox/> </Button>
                        </Row>

                     </Col>
                    </Row>
                    <Row>Note: {appointment.notes}</Row>
                    {this.state.edit && <AppointmentForm closeForm={this.handleEdit} appointment={appointment}/>}
                     
                 </Card >
             </div>
         )
     }
 }
 
 const mapDispatchToProps= (dispatch) =>{
    return {
       onPatchAppointment: (appointmentData, appointmentId) => patchAppointment(appointmentData, appointmentId, dispatch),
       onDeleteAppointment: (appointmentId) => deleteAppointment(appointmentId, dispatch)
    }
 }

 export default connect(null, mapDispatchToProps)(AppointmentView)