import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import { ContainerMain, FollowersContainer, FollowersH1 } from './followersStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getFollowersUserApiGitHub, getUserApiGitHub } from '../../config/apiGitHug';
import { Link } from 'react-router-dom';


function Repos () {
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [followers, setFollowers] = useState();

    useEffect (()=> {
        getFollowersUserApiGitHub(user).then(res => {
            setFollowers(res);
        }).catch(error => {
            console.log('ERROR: ',error);
        });
    }, [user]);

    function changeUser(user) {
        
        getUserApiGitHub(user).then(response => {
            dispatch({
                type: 'LOGIN',
                login: response.login,
                name: response.name,
                email: response.email,
                location: response.location,
                company: response.company,
                bio: response.bio,
                avatar_url: response.avatar_url, 
                followers_url: response.followers_url,
                following_url: response.following_url,
                organizations_url: response.organizations_url, 
                starred_url: response.starred_url,
                repos_url: response.repos_url,
                public_repos: response.public_repos,
                public_gists: response.public_gists,
                followers: response.followers,
                following: response.following 
            });
        });
    }
    
    return (
        <>
            <Navbar tab='Seguidores'/>
            <ContainerMain className="container">
                {followers && followers.map(element => {
                    return (
                        <FollowersContainer>
                            <FollowersH1>
                                <div className="d-flex">
                                    <div></div>
                                    <section className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={element.avatar_url} alt="Foto do seguidor"/>
                                            <p>#{element.login}</p>
                                        </div>
                                        <Link to={'/home'} onClick={changeUser(element.login)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short align-self-center" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg> 
                                        </Link>
                                    </section>
                                </div>
                            </FollowersH1>
                        </FollowersContainer>
                    )
                })}
            </ContainerMain>
        </>
    );
}

export default Repos;