import React from 'react';
import Navbar from '../../components/navbar';
import { ContainerMain, Profile } from './homeStyle';
import { useSelector } from 'react-redux';


function Home () {
    return (
        <>
            <Navbar />
            <ContainerMain>
                <Profile>
                    <img src={useSelector((state)=>state.avatar_url)} alt="Imagem do perfil"/>
                </Profile>
            </ContainerMain>
        </>
    );
}

export default Home;