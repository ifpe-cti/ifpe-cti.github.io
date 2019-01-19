import React, { Component } from 'react'

export default class PresentationPhoto extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>
                <img src={this.props.src} alt="Campus do ifpe Garanhuns"/>
                
            </h1>
        )
    }

}