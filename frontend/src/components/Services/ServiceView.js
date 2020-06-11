import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AuthHOC } from '../HOCs/AuthHOC'
import GigsList from '../Gigs/GigsList'
import GigView from '../Gigs/GigView'


class ServiceView extends Component {

    
    state = {
        selected_gig: null
    }


    selectGig = (gig) => {
        this.setState({selected_gig: gig})
    }
    
    

    render() {
        const {gigs} = this.props.location.state.service
        return (
            <div>
                I am a service view
                <div>
                    <GigsList gigs={gigs} selectGig={this.selectGig} />
                </div>
                <div>
                    {this.state.selected_gig && <GigView gig={this.state.selected_gig} />}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { services: state.services}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchServices: (userId) => fetchServices(userId, dispatch)
    }
}


export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(ServiceView))
