import styled, { createGlobalStyle } from 'styled-components'

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
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};

    @media (max-width: 575.98px) {
        height: ${props => props.heightProps === 'auto' ? '185px' : props.heightProps};
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        height: ${props => props.heightProps === 'auto' ? '285px' : props.heightProps};
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        height: ${props => props.heightProps === 'auto' ? '385px' : props.heightProps};
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
    }

    @media (min-width: 1200px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
    }
`;



export const Container = styled.div`
    background-image: url(${props => props.imageBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    .caption {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    .caption span.border {
        background-color: #111;
        color: #fff;
        padding: 18px;
        font-size: 18px;
        letter-spacing: 3px;
        line-height: 3.2
    }
        
    @media (max-width: 575.98px) {
        height: ${props => props.heightProps === 'auto' ? '185px' : props.heightProps};
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        height: ${props => props.heightProps === 'auto' ? '285px' : props.heightProps};
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        height: ${props => props.heightProps === 'auto' ? '385px' : props.heightProps};
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
    }

    @media (min-width: 1200px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
    }



`;