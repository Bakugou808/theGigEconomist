import React, { Component } from 'react'

export default class GigView extends Component {


    render() {
        return (
            <div>
                {this.props.gig.title}
            </div>
        )
    }
}
