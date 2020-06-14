import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServiceCard from './ServiceCard'
import { fetchServices } from '../../actions/serviceActions'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



const userId = localStorage.userId

class ServicesList extends Component {

    componentDidMount(){
        this.props.onFetchServices(userId)
    }

    borderColor = () => {

        const colors = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            // 'light',
            'dark',
          ]
          let color = colors.pop()
          colors.unshift(color)
        return color
    }
    

    renderServices = () => {
        const {match, history} = this.props
        let bg = this.borderColor()

        const subCardStyle = {
            'width': 'auto',
        }


        return this.props.services.data.map(service => {
            return (
                <Card 
                    border='warning'
                    bg="info"
                    text={'info' === 'light' ? 'dark' : 'white'}
                    style={subCardStyle}
                >
                    <Card.Header>{service.title}</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <ServiceCard service={service} match={match} history={history} /> 
                    </Card.Text>
                    </Card.Body>
                </Card>


                
                )
        } )
    }
    
    
 
    render() {
        const cardStyle = {
            'width': '51rem', 
            'height': 'auto', 
            // 'overflow-y': 'auto'
        }

        const containerStyle = {
            'width': '50rem', 
            'height': '30rem',
            'overflow-y': 'auto',
            'margin': '5px',
            '.scrollbar-width': 'thin',
            '.scrollbar-color': 'yellow'
        }
        
        return ( 
            <div>
                I am the list of services
                {/* {this.props.services.data && this.renderServices()} */}
                <Card
                    bg={'info'}
                    // key={service.id}
                    style={cardStyle}
                    text={'info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                >
                    <Card.Header>Your Services </Card.Header>
                    <Container style={containerStyle}>
                        {this.props.services.data && this.renderServices()}
                    </Container>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { services: state.services}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchServices: (userId) => fetchServices(userId, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)