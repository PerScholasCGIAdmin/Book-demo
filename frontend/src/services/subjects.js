const basePath = "http://localhost:4000/subject";

export const getSubjects = () =>
{
    console.log("getSubjects");
    return fetch(basePath).then((data) => data.json());
}