const url = "https://api.github.com/users";
const client_id = "b5756535a4d6d83f81af";
const client_secret = "1dc62225063061a1d4b5cc1725aa93496cfe6313";
const token = "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";
const options = {
    method: 'GET',
    headers: {
        authorization: `token ${token}`
    },
    mode: 'cors',
    cache: 'default'
}

export async function getUserApiGitHub(user) {
    const profileResponse = await fetch(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`,
        options
    ).then(response => {
        if(!response.ok) return 'ERROR';
        return response.json();
    }).then(data => {
        return data;
    });
    return profileResponse;
}

export async function getReposUserApiGitHub(user) {
    const reposResponse = await fetch(
        `${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`,
        options
    ).then(response => {
        if(!response.ok) return 'ERROR';
        return response.json();
    }).then(data => {
        return data;
    });
    return reposResponse;
}

export async function getFollowersUserApiGitHub(user) {
    const followersResponse = await fetch(
        `${url}/${user}/followers?client_id=${client_id}&client_secret=${client_secret}`,
        options
    ).then(response => {
        if(!response.ok) return 'ERROR';
        return response.json();
    }).then(data => {
        return data;
    });
    return followersResponse;
}

export async function getFollowingUserApiGitHub(user) {
    const followingResponse = await fetch(
        `${url}/${user}/following?client_id=${client_id}&client_secret=${client_secret}`,
        options
    ).then(response => {
        if(!response.ok) return 'ERROR';
        return response.json();
    }).then(data => {
        return data;
    });
    return followingResponse;
}

export function ChangeUser(user, dispatch) {
    
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