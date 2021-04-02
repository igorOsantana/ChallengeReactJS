import styled from 'styled-components';

export const ContainerMain = styled.nav `
    background-color: #1F1F1F;
    display: flex;
    justify-content: flex-start;
`;

export const Content = styled.div `
    display: flex;
    justify-content: flex-end;
    margin: 0 5rem;

    @media(max-width: 768px) {
        justify-content: flex-start;
        margin: 0.5rem 1rem 0 1rem;
    }
`;