import styled from 'styled-components';

export const ContainerMain = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, button {
        width: 20rem;
        font-weight: bolder;
    }
`;

export const IconGitHub = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    color: #FFC23D;
`;

export const Feedback = styled.div `
    display: none;
    color: #f00;
    font-size: 13px;
    font-weight: bolder;
`;