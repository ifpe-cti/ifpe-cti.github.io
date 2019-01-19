import React, { Component } from 'react'
import '../../assets/css/reset.css'


export default class PresentationPhoto extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <img src={this.props.src} alt="Campus do ifpe Garanhuns" />
            </header>
        )
    }

}