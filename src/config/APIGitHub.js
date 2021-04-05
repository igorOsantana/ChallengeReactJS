const urlBase = "https://api.github.com/users";
const client_id = process.env.REACT_APP_APIGITHUB_CLIENT_ID;
const client_secret = process.env.REACT_APP_APIGITHUB_CLIENT_SECRET;
const token = process.env.REACT_APP_APIGITHUB_CLIENT_TOKEN;
const options = {
    method: 'GET',
    headers: {
        authorization: `token ${token}`
    },
    mode: 'cors',
    cache: 'default'
}

export async function getUserDataApiGitHub(user, whichUrl) {
    const urls = {
        userUrl: `${urlBase}/${user}?client_id=${client_id}&client_secret=${client_secret}`,
        reposUrl: `${urlBase}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`,
        followerUrl: `${urlBase}/${user}/followers?client_id=${client_id}&client_secret=${client_secret}`,
        followingUrl: `${urlBase}/${user}/following?client_id=${client_id}&client_secret=${client_secret}`
    }
    const profileResponse = await fetch(
        urls[whichUrl],
        options
    ).then(response => {
        if(!response.ok) return 'ERROR';
        return response.json();
    }).then(data => {
        return data;
    });
    return profileResponse;
}

export function ChangeUser(user, dispatch) {
    
    getUserDataApiGitHub(user, 'userUrl').then(response => {
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