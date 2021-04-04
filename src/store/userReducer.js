const INITIAL_STATE = {
    login: "",
    name: "",
    email: "",
    location: "",
    company: "",
    bio: "",
    avatar_url: "", 
    followers_url: "",
    following_url: "",
    organizations_url: "", 
    starred_url: "",
    repos_url: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
};

function userReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            return { 
                login: action.login,
                name: action.name,
                email: action.email,
                location: action.location,
                company: action.company,
                bio: action.bio,
                avatar_url: action.avatar_url, 
                followers_url: action.followers_url,
                following_url: action.following_url,
                organizations_url: action.organizations_url, 
                starred_url: action.starred_url,
                repos_url: action.repos_url,
                public_repos: action.public_repos,
                public_gists: action.public_gists,
                followers: action.followers,
                following: action.following 
            }
        default:
            return state;
    }
}

export default userReducer;