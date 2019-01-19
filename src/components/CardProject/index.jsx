import React from 'react'
import { Card, Container, Strong, Info, Title, ContainerAction, TextBackground } from './styles'
import ButtonIcon from '../ButtonIcon'
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons'

export default class CardProject extends React.Component {


    render() {
        return (
            <Card>
                <TextBackground>{this.props.name}</TextBackground>
                <div>
                    <Info>
                        <Title>Feito com: <Strong>{this.props.language}</Strong></Title>
                        <Title>Criado em: <Strong>{this.props.createdAt}</Strong></Title>
                        <Title>Numero de issues: <Strong>{this.props.issuesNumber}</Strong></Title>
                        <Title>Licença: <Strong>{this.props.license}</Strong></Title>
                        <Title>Contribuidores: <Strong>{this.props.contributors}</Strong></Title>
                    </Info>

                    <ContainerAction>
                        <ButtonIcon
                            icon={faDownload}
                            value={"Download"}
                            color={"#00ae69"}
                            colorHover={"#007142"}
                        />
                        <ButtonIcon
                            icon={faEye}
                            value={"Ver"}
                            color={"#1D68B4"}
                            colorHover={"#195C9F"}
                        />
                    </ContainerAction>
                </div>

            </Card>
        )
    }
}