import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectGig, setGigsForService } from '../../actions/gigActions'
import { AuthHOC } from '../HOCs/AuthHOC'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Accordion from 'react-bootstrap/Accordion'

class GigsList extends Component {


    componentDidMount(){
        const {onSetGigsForService} = this.props
        onSetGigsForService(this.props.gigs) 
    }

    renderGigs = () => {
        const {gigList, onSelectGig} = this.props
         
        
    return this.props.gigList.map(gig=> {
        const cardStyle = {
            "margin": '10px',
        }
        return (
            <Card
                bg={'info'}
                // key={service.id}
                border='warning'
                style={cardStyle}
                text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                onClick={()=>onSelectGig(gig)}
            >
                <Card.Header>
                    <Container>
                        <Row>
                            <Col>{gig.title}</Col>
                            <Col>{gig.client.company_name}</Col>
                            <Col>{gig.created_at}</Col>
                            <Col>{gig.completed}</Col>
                        </Row>
                    </Container>
                </Card.Header>
            </Card>
        )
    })
    }


    render() {
        const cardStyle = {
            'width': '100', 
            'height': 'auto', 
            'margin':'10px'
            // 'overflow-y': 'auto'
        }

        const containerStyle = {
            'width': 'auto', 
            'height': '20rem',
            'overflow-y': 'auto',
            'margin': '5px',
            '.scrollbar-width': 'thin',
            '.scrollbar-color': 'yellow'
        }

        const titleStyle = {
            "cursor": 'pointer'
        }
        return (
            <div>
                <Accordion defaultActionKey="0">
                    <Card
                        bg={'info'}
                        // key={service.id}
                        border='warning'
                        style={cardStyle}
                        text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    >
                        {/* <Card.Header> */}
                            <Accordion.Toggle as={Card.Header} eventKey='0' >
                                <Card.Title style={titleStyle}>Gigs for {this.props.service.title}</Card.Title> 
                            </Accordion.Toggle>
                        {/* </Card.Header> */}
                        <Accordion.Collapse eventKey='0'>
                            <Container style={containerStyle}>
                                {this.renderGigs()}
                            </Container>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>  
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        gigList: store.gigs.gigsForService,
        selectedGig: store.gigs.selectedGig
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       onSelectGig: (gig) => dispatch(selectGig(gig)),
       onSetGigsForService: (gigs) => dispatch(setGigsForService(gigs))

    }
}


export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(GigsList))