import styled from 'styled-components'

export const ContainerCardProject = styled.div`
    display: flex;
    padding: 10px 0;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    @media (max-width: 575.98px) {
        flex-direction: column;
        align-items: center;
    }
`