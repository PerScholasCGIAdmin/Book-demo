const basePath = "http://localhost:4000/users";

export const getUsers = () =>
{
    console.log("getUsers");
    return fetch(basePath).then((data) => data.json());
}