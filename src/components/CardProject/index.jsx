import React from 'react'
import { Card, Container, ContainerAction } from './styles'
import ButtonIcon from '../ButtonIcon'

export default class CardProject extends React.Component {


    render() {
        return (
            <Card>
                <ContainerAction>
                    <ButtonIcon
                        icon={"fa-bars"}
                        value={"download"}
                    />
                    <ButtonIcon
                        icon={"fa-bars"}
                        value={"página"}
                    />
                </ContainerAction>
            </Card>
        )
    }
}