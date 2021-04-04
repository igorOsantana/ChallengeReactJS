const url = "https://api.github.com/users";
const client_id = "b5756535a4d6d83f81af";
const client_secret = "1dc62225063061a1d4b5cc1725aa93496cfe6313";
const options = {
    method: 'GET',
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