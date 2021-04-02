export async function getUserApiGitHub(user) {
    // const search = document.getElementById("userSearch");
    const url = "https://api.github.com/users";
    const client_id = "b5756535a4d6d83f81af";
    const client_secret = "1dc62225063061a1d4b5cc1725aa93496cfe6313";

    const profileResponse = await fetch(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
    );
    const profile = profileResponse.json();

    return profile;
}