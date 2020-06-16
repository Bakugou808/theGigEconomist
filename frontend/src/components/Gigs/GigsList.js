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
        return (
            <div>
                {this.renderGigs()}
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