import styled from 'styled-components';

export const ContainerMain = styled.main `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const ProfileHeader = styled.div `
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 1rem;
    background-color: #383838;
    justify-content: space-around;

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border: 2px solid #fff;
    }
    p {
        font-size: 42px;
        font-weight: bolder;
        margin: 0rem;
    }
    div div {
        margin: 0 1rem;
        font-size: 15px;
    }
`;

export const ProfileNumbers = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileMain = styled.main `
    display: flex;
    flex-direction: column;
`;

export const ProfileH1 = styled.div `
    width: 100%;
    padding: 0.5rem 2rem;
    font-size: 32px;
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

export const ProfileInfo = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;
    margin-bottom: 3rem;
`;
