import {useState} from "react";

import {Form} from "react-router-dom";
import {Button} from "react-bootstrap";
import {searchAuthor} from "../../services/bookApi.js";
import SearchResult from "./SearchResult.jsx";

export default function Search() {
    const [result, setResult] = useState(null);

    const [author, setAuthor] = useState("author")

    const  handleChange = (event) => {
        setAuthor(event.target.value);
    };

    const  searchQuery = async () => {
        let data = await searchAuthor(author);
        console.log(data)
        setResult(data)
    };

    return (
      <>
          <h2>Search Form</h2>
          <Form>
              <input value={author} onChange={handleChange} type="text" />
              <Button onClick={searchQuery}>Search</Button>
          </Form>
          {result && <SearchResult result={result}/>}
      </>
    );
}