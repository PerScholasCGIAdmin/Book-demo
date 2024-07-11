const basePath = "http://localhost:4000/users";

export const getUsers = () =>
{
    console.log("getUsers");
    return fetch(basePath).then((data) => data.json());
}

export const getUserData = (id) =>
{
    console.log("getUserData");
    return fetch(basePath + "/" + id).then((data) => data.json());
}

export const addBookToUser = async (userId, bookId) =>
{
    let path = basePath + "/addBook"
    const reqBody = { "userId" : userId, "bookId": bookId}
    const response = await fetch(path, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(reqBody), // body data type must match "Content-Type" header
      });

}