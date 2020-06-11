import React, { Component } from 'react'

export default class GigsList extends Component {

    renderGigs = () => {
        const {gigs, selectGig} = this.props
    return gigs.map(gig=> {
        return (
        <div onClick={()=>selectGig(gig)}>
            <span>{gig.title}</span>
            <span>{gig.details}</span>
            <span>{gig.created_at}</span>
            <span>{gig.completed}</span>
            {/* {`${gig.title} ${gig.details} ${gig.created_at} ${gig.completed}`} */}
        </div>
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
