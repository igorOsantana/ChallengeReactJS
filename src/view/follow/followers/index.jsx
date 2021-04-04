import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import { FollowContainer, FollowH1 } from '../followStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getFollowersUserApiGitHub, ChangeUser } from '../../../config/APIGitHub';
import { Link } from 'react-router-dom';


function Followers () {
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
    
    return (
        <>
            <Navbar tab='Seguidores'/>
            <main className="container">
                {followers && followers.map(element => {
                    return (
                        <FollowContainer key={element.id}>
                            <FollowH1>
                                <div className="d-flex">
                                    <div></div>
                                    <section className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={element.avatar_url} alt="Foto do seguidor"/>
                                            <p>#{element.login}</p>
                                        </div>
                                        <Link to={'/home'} onClick={()=>{ChangeUser(element.login, dispatch)}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short align-self-center" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg> 
                                        </Link>
                                    </section>
                                </div>
                            </FollowH1>
                        </FollowContainer>
                    )
                })}
            </main>
        </>
    );
}

export default Followers;