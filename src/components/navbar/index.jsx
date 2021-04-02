import React from 'react';
import { ContainerMain, Content } from './navbarStyle';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <>
            <ContainerMain className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Content className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/home" >Início</Link>
                    <Link className="nav-item nav-link" to="/repos" >Repositórios</Link>
                    <Link className="nav-item nav-link" to="/followers" >Seguidores</Link>
                    <Link className="nav-item nav-link" to="/followings" >Seguindo</Link>
                    </div>
                </Content>
            </ContainerMain>
        </>
    );
}

export default Navbar;