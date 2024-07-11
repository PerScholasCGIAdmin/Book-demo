const basePath = "http://localhost:4000/books";
export const searchAuthor = (authorName) =>
{
    const url = `${basePath}/author/${authorName}`;
    return fetch(url).then((data) => data.json());
}

export const getBooks = () =>
{
    console.log("fetch list of books")
    return fetch(basePath).then((data) => data.json());

}

// export const searchTitle = (title) => {
//     console.log("search title: ", title);
//     const url = `${basePath}/title/${title}`;
//     let response = fetch(url)
//         .then(response => response.json());
//     console.log(response);
//     return response;
// }