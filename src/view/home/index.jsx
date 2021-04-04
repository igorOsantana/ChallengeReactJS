import React from 'react';
import Navbar from '../../components/navbar';
import Profile from '../../components/profile';
import { ContainerMain } from './homeStyle';


function Home () {
    return (
        <>
            <Navbar tab='Início'/>
            <ContainerMain>
                <Profile />
            </ContainerMain>
        </>
    );
}

export default Home;