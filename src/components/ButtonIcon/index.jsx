import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Text } from './styles'

export default class ButtonIcon extends Component {
    render() {
        return (
            <Button color={this.props.color} colorHover={this.props.colorHover}>
                <FontAwesomeIcon icon={faCoffee}/>
                <Text>{this.props.value}</Text>
            </Button>
        )
    }
}