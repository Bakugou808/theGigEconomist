import React, { Component } from 'react'
import { connect } from 'react-redux'

class GigView extends Component {


    render() {
        
        return (
            <div>
                {this.props.gig.title}
                {this.props.client && this.props.client.company_name}
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