import styled from 'styled-components';

export const ContainerMain = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconGitHub = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    color: #FFC23D;
`;

export const FormLogin = styled.form `

    input, button {
        display: flex;
        width: 20rem;
        font-weight: bolder;
        justify-content: center;
        align-items: center;
    }
`;

export const Feedback = styled.div `
    display: flex;
    justify-content: flex-end;
    color: #f00;
    font-size: 12px;
    font-weight: bolder;
`;