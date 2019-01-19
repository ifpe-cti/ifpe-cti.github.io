import styled, { createGlobalStyle } from 'styled-components'
import campus from '../../assets/img/campus.jpg'

export const GlobalStyle = createGlobalStyle`
    body, html {
    height: 100%;
    margin: 0;
    font: 400 15px/1.8 "Lato", sans-serif;
    color: #777;
    }
`

export const BackgroundOpacity = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};
`;

export const Container = styled.div`

    
    background-image: url(${campus});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    

    .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    }

    .caption span.border {
    background-color: #111;
    color: #fff;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 10px;
    }

`;