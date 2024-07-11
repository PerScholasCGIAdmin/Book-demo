import {useState} from "react";


export default function SearchResult(prop) {

    if(prop.result.description == "error"){
        return (
            <>
                <p>author not found</p>
            </>
        );
    }
    return (
        <>
            <p>Search Results:</p>
            <p>Book Name : {prop.result.description}</p>
        </>
    );
}