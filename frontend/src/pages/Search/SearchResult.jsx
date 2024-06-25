import {useState} from "react";


export default function SearchResult(prop) {

    if(prop.result.desc == "error"){
        return (
            <>
                <p>author not found</p>
            </>
        );
    }
    return (
        <>
            <p>Search Results:</p>
            <p>Book Name : {prop.result.desc}</p>
        </>
    );
}