import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    padding: 10px;
    background: ${props => props.color};
    font-weight: bold;
    color: #FFF;

    &:hover{
        background: ${props => props.colorHover};
        cursor: pointer;
    }
`

export const Text = styled.span`
    margin-left: 8px;
`