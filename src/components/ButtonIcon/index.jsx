import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Text } from './styles'

export default class ButtonIcon extends Component {
    render() {
        return (
            <Button color={this.props.color} colorHover={this.props.colorHover}>
                <FontAwesomeIcon icon={this.props.icon}/>
                <Text>{this.props.value}</Text>
            </Button>
        )
    }
}