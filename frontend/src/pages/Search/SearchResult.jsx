import {useState} from "react";


export default function SearchResult(prop) {
    return (
        <>
            <p>Search Results:</p>
            <p>Book Name : {prop.result.desc}</p>
        </>
    );
}