import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button } from './styles'

export default class BottonIcon extends Component {
    render() {
        return (
            <Button>
                <FontAwesomeIcon icon={faCoffee}/>
                {this.props.value}
            </Button>
        )
    }
}