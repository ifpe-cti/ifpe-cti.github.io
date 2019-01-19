import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, html {
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

    img {
        width: 60%;
        position: absolute
    }

    @media (max-width: 575.98px) {
        height: ${props => props.heightProps === 'auto' ? '185px' : props.heightProps};
        opacity: 0.8;
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        height: ${props => props.heightProps === 'auto' ? '285px' : props.heightProps};
        opacity: 0.8;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        height: ${props => props.heightProps === 'auto' ? '385px' : props.heightProps};
        opacity: 0.5;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
        opacity: 0.5;
    }

    @media (min-width: 1200px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};
        opacity: 0.5;
    }
`;

export const ContainerImg = styled.div`
    position: absolute;
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 575.98px) {
        height: ${props => props.heightProps === 'auto' ? '185px' : props.heightProps};
        
        img {
            width: 200px;
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        height: ${props => props.heightProps === 'auto' ? '285px' : props.heightProps};

        img {
            width: 200px;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        height: ${props => props.heightProps === 'auto' ? '385px' : props.heightProps};

        img {
            width: 300px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};

        img {
            width: 400px;
        }
    }

    @media (min-width: 1200px) {
        height: ${props => props.heightProps === 'auto' ? '100vh' : props.heightProps};

        img {
            width: 30vw;
        }
    }
`;

export const Container = styled.div`
    background-image: url(${props => props.imageBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%; 

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