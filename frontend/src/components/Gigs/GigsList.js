import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectGig, setGigsForService } from '../../actions/gigActions'
import { AuthHOC } from '../HOCs/AuthHOC'

class GigsList extends Component {


    componentDidMount(){
        const {onSetGigsForService} = this.props
        onSetGigsForService(this.props.gigs)
    }

    renderGigs = () => {
        const {gigList, onSelectGig} = this.props
         
        
    return this.props.gigList.map(gig=> {
        return (
        <div onClick={()=>onSelectGig(gig)}>
            <span>{gig.title}</span>
            <span>{gig.client.company_name}</span>
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