import styled from 'styled-components';

export const ReposContainer = styled.div `
    border-bottom: 1px solid #383838;
    padding-top: 1rem;
`;

export const ReposH1 = styled.div `
    width: 100%;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    font-weight: bolder;

    div > div {
        width: 1.5rem;
        border-right: 1rem solid #FFCF3D;
        border-radius: 30px;
        margin-right: 1rem;
    }
    p {
        margin: 0px;
    }
`;

export const ReposInfo = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    p {
        margin: 0px;
    }
`;