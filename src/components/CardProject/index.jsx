import React from 'react'
import { Card, Container, Strong, Info, Title, ContainerAction, TextBackground } from './styles'
import ButtonIcon from '../ButtonIcon'

export default class CardProject extends React.Component {


    render() {
        return (
            <Card>
                <TextBackground>{this.props.value}</TextBackground>

                <Info>
                    <Title>Feito com: <Strong>Java</Strong></Title>
                    <Title>Criado em: <Strong>16/07/2018</Strong></Title>
                    <Title>Numero de issues: <Strong>8</Strong></Title>
                    <Title>Contribuidores: <Strong>Lorem Ipsum, Dolor Samer, Ipsum Samer, Dolor Ipsum</Strong></Title>
                </Info>

                

                <ContainerAction>
                    <ButtonIcon
                        icon={"fa-bars"}
                        value={"Download"}
                        color={"#00ae69"}
                        colorHover={"#007142"}
                    />
                    <ButtonIcon
                        icon={"fa-bars"}
                        value={"Ver"}
                        color={"#1d68b4"}
                        colorHover={"#007142"}
                    />
                </ContainerAction>
            </Card>
        )
    }
}