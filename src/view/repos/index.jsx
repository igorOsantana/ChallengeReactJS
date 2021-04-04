import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import { ReposContainer, ReposH1, ReposInfo } from './reposStyle';
import { useSelector } from 'react-redux';
import { getReposUserApiGitHub } from '../../config/APIGitHub';

function Repos () {
    const user = useSelector(state => state.login);

    const [repos, setRepos] = useState();

    useEffect (()=> {
        getReposUserApiGitHub(user).then(res => {
            setRepos(res);
        }).catch(error => {
            console.log('ERROR: ',error);
        });
    }, [user]);

    
    return (
        <>
            <Navbar tab='Repositórios'/>
            <main className="container">
                {repos && repos.map(element => {
                    return (
                        <ReposContainer key={element.id}>
                            <ReposH1>
                                <div className="d-flex">
                                    <div></div>
                                    <p>{element.name}</p>
                                </div>
                            </ReposH1>
                            <ReposInfo>
                                <p>{element.description}</p>
                                <div className="d-flex mt-4 justify-content-between align-items-end">
                                    <div className="d-flex align-items-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                        <p className="mx-2">{element.stargazers_count}</p>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock text-success" viewBox="0 0 16 16">
                                            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock text-danger" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </div>
                                </div>
                            </ReposInfo>
                        </ReposContainer>
                    )
                })}
            </main>
        </>
    );
}

export default Repos;