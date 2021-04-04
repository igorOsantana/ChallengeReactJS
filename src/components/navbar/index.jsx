import React, { useEffect } from 'react';
import { ContainerMain, Content } from './navbarStyle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar (props) {

    useEffect (()=> {
        const tabs = document.getElementsByClassName('nav-item');
        for (var i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('active');
            if(tabs[i].innerText === props.tab) {
                tabs[i].classList.add('active');
            }
        }
    }, [props.tab]);

    return (
        <>
            <ContainerMain className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <p hidden={props.tab !== 'Início' ? true : false}><strong># {useSelector(state => state.login)}</strong></p>
                <Link hidden={props.tab !== 'Início' ? false : true} style={{ padding: '0.5rem 1rem 0.5rem 2rem'}} to='/home' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </Link>
                <p hidden={props.tab === 'Início' ? true : false}><strong>{useSelector(state => {
                    switch(props.tab){
                        case 'Repositórios':
                            return `${state.public_repos} Repositórios`
                        case 'Seguidores':
                            return `${state.followers} Seguidores`
                        case 'Seguindo':
                            return `${state.following} Seguindo`
                        default:
                            return 'error';
                    }
                })}</strong></p>
                <Content className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/home" >Início</Link>
                        <Link className="nav-item nav-link" to="/repos" >Repositórios</Link>
                        <Link className="nav-item nav-link" to="/followers" >Seguidores</Link>
                        <Link className="nav-item nav-link" to="/following" >Seguindo</Link>
                    </div>
                </Content>
                <Link className="d-flex align-items-start" style={{ padding: '1rem 2rem 1rem 1rem'}} to="/" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    Sair
                </Link>
            </ContainerMain>
        </>
    );
}

export default Navbar;