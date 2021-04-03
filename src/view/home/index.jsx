import React from 'react';
import Navbar from '../../components/navbar';
import Profile from '../../components/profile';
import { ContainerMain } from './homeStyle';
import { useSelector } from 'react-redux';


function Home () {
    return (
        <>
            <Navbar />
            <ContainerMain>
                <Profile />
            </ContainerMain>
        </>
    );
}

export default Home;