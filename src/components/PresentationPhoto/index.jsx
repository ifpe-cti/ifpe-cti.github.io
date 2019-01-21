import React, { Component } from 'react'
import '../../assets/css/reset.css'
import { Container, GlobalStyle, BackgroundOpacity, ContainerImg } from './styles'

export default class PresentationPhoto extends Component {
    render() {
        return (

            <Container
                imageBg={this.props.backgroundImage}
                heightProps={this.props.height} >

                <GlobalStyle height={this.props.height} />

                <BackgroundOpacity
                    color={this.props.color}
                    heightProps={this.props.height}
                />

                <ContainerImg heightProps={this.props.height}>
                    <img src={this.props.logo} alt="Logo do ifpe Garanhuns - cti" />
                </ContainerImg>
                
            </Container>
          
        )
    }

}