import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class TotalTaxes extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <Card.Title></Card.Title>
                    <Card.Body>
  
                    </Card.Body>
                </Card>
            </div>
        ) 
    }
}

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TotalTaxes)
