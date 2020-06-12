import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AuthHOC } from '../HOCs/AuthHOC'
import GigsList from '../Gigs/GigsList'
import GigView from '../Gigs/GigView'
import GigForm from '../Gigs/GigForm'


class ServiceView extends Component {

    
    state = {
        new_gig: false,

    }


    addGig = () => {
        this.setState(prev => ({new_gig: !prev.new_gig}))
    }
    
    

    render() {
        const {service} = this.props.location.state
        return (
            <div>
                I am a service view
                <div>
                    <GigsList gigs={this.props.location.state.service.gigs} />
                </div>
                <div>
                    {this.props.selectedGig && <GigView />}
                </div>
                <div>
                    <button onClick={this.addGig}>Add Gig</button>
                    {this.state.new_gig && <GigForm closeForm={this.addGig} service={service} />}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return { 
        services: store.services,
        gigs: store.gigs,
        selectedGig: store.gigs.selectedGig
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchServices: (userId) => fetchServices(userId, dispatch)
    }
}


export default AuthHOC(connect(mapStateToProps, mapDispatchToProps)(ServiceView))
