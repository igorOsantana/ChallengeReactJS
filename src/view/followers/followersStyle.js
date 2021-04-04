import styled from 'styled-components';

export const ContainerMain = styled.main `
    margin-top: 3rem;
`;

export const FollowersContainer = styled.div `
    border-bottom: 1px solid #383838;
    padding-top: 1rem;
`;

export const FollowersH1 = styled.div `
    width: 100%;
    padding: 0.5rem 2rem;
    font-size: 22px;
    font-weight: bolder;

    section {
        width: 100%;

        svg {
            cursor: pointer;
        }
    }
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 2px solid #fff;
        margin: 0 2rem;
    }
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
