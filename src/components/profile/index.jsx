import React from 'react';
import { ContainerMain } from './profileStyle';
import { useSelector } from 'react-redux';


function Profile () {
    return (
        <ContainerMain className="d-flex align-items-center">
            <img src={useSelector((state)=>state.avatar_url)} alt="Imagem do perfil"/>
            <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    {useSelector(state => state.followers)}
                    <p>Seguidores</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    {useSelector(state => state.following)}
                    <p>Seguindo</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    {useSelector(state => state.public_repos)}
                    <p>Repos</p>
                </div>
            </div>
        </ContainerMain>
    );
}

export default Profile;