import React from 'react';
import { 
    ContainerMain, 
    ProfileHeader, 
    ProfileNumbers, 
    ProfileMain, 
    ProfileH1, 
    ProfileInfo, 
    ContainerMainMobile 
} from './profileStyle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Profile () {
    return (
        <>
            <ContainerMain>
                <ProfileHeader className="d-flex align-items-center">
                    <img src={useSelector(state=>state.avatar_url)} alt="Imagem do perfil"/>
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
                        <div className="d-flex">
                            <div></div>
                            <p style={{textTransform: 'uppercase'}}>{useSelector(state => state.name)}</p>
                        </div>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.email)}</p>
                        <p>{useSelector(state => state.location)}</p>
                    </ProfileInfo>
                    <ProfileH1>
                        <div className="d-flex">
                            <div></div>
                            <p>BIO</p>
                        </div>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.bio)}</p>
                    </ProfileInfo>
                </ProfileMain>
            </ContainerMain>
            <ContainerMainMobile>
                <div className="d-flex justify-content-center w-100">
                    <img src={useSelector(state=>state.avatar_url)} alt="Imagem do perfil"/>
                </div>                
                <ProfileMain>
                    <ProfileH1>
                        <div className="d-flex">
                            <div></div>
                            <p style={{textTransform: 'uppercase'}}>{useSelector(state => state.name)}</p>
                        </div>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.email)}</p>
                        <p>{useSelector(state => state.location)}</p>
                    </ProfileInfo>
                    <ProfileHeader className="d-flex align-items-center">
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
                    <ProfileH1>
                        <div className="d-flex">
                            <div></div>
                            <p>BIO</p>
                        </div>
                    </ProfileH1>
                    <ProfileInfo>
                        <p>{useSelector(state => state.bio)}</p>
                    </ProfileInfo>
                </ProfileMain>
            </ContainerMainMobile>
        </>
    );
}

export default Profile;