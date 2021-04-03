import React from 'react';
import { ContainerMain, ProfileHeader, ProfileNumbers, ProfileMain, ProfileH1, ProfileInfo } from './profileStyle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Profile () {
    return (
        <>
            <ContainerMain>
                <ProfileHeader className="d-flex align-items-center">
                    <img src={useSelector((state)=>state.avatar_url)} alt="Imagem do perfil"/>
                    <div className="d-flex">
                        <Link to ="/followers">
                            <ProfileNumbers>
                                <p>{useSelector(state => state.followers)}</p>
                                Seguidores
                            </ProfileNumbers>
                        </Link>
                        <Link to ="/following">
                            <ProfileNumbers>
                                <p>{useSelector(state => state.following)}</p>
                                Seguindo
                            </ProfileNumbers>
                        </Link>
                        <Link to ="/repos">
                            <ProfileNumbers>
                                <p>{useSelector(state => state.public_repos)}</p>
                                Repos
                            </ProfileNumbers>
                        </Link>
                    </div>
                </ProfileHeader>
                <ProfileMain>
                    <ProfileH1>
                        <p>{useSelector(state => state.name).toUpperCase()}</p>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.email)}</p>
                        <p>{useSelector(state => state.location)}</p>
                    </ProfileInfo>
                    <ProfileH1>
                        <p>BIO</p>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.bio)}</p>
                    </ProfileInfo>
                </ProfileMain>
            </ContainerMain>
        </>
    );
}

export default Profile;