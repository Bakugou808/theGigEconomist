import React, { Component } from 'react'
import { connect } from 'react-redux'

class GigView extends Component {


    render() {
        return (
            <div>
                {this.props.gig.title}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {gig: store.gigs.selectedGig}
}


export default connect(mapStateToProps)(GigView)