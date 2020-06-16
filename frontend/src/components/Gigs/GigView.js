import React, { Component } from 'react'
import { connect } from 'react-redux'

class GigView extends Component {


    render() {
        
        return (
            <div>
                {`${this.props.gig.title}
                ${this.props.gig.service_type}
                ${this.props.client && this.props.client.company_name}
                ${this.props.client && this.props.client.contact_name}
                ${this.props.client && this.props.client.email}
                ${this.props.client && this.props.client.cell}
                ${this.props.client && this.props.client.venmo}
                payment amount:
                ${this.props.gig.completed}
                ${this.props.gig.details}`}

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        gig: store.gigs.selectedGig,
        client: store.gigs.selectedGig.client
    }
}


export default connect(mapStateToProps)(GigView)