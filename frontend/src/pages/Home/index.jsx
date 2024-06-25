/**
 * I've baked some errors into this component so you can have some fun practicing your debugging.
 * As a test for yourself, see if you can simplify this compoenent and minimize the re-renders
 */
import {useContext, useState} from "react";
import {CurrentUserContext} from "../../utils/UserContext.js";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { addBookToUser, getUserData} from "../../services/user.js";
import { getBooks } from "../../services/bookApi.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    useQuery,
} from '@tanstack/react-query'
import BookShopCard from "../../components/BookCard.jsx";

export default function Home() {
    //Reminder that this component is a mess for you to clean up as practice. Consider custom hooks to abstract some of this out
    const {
        userContext,
    } = useContext(CurrentUserContext);

    const [userBooks, setUserBooks] = useState([])
    const [pendingBookId, setPendingBookId] = useState(0)

    const [booksLoaded, setbooksLoaded] = useState(false)
    const [bookList, setBookList] = useState([])

    if(userContext === null){
        return(
            <p>Please navigate to our User page and select a user <NavLink to={"/user"}>Select User</NavLink></p>
        )
    }

    const  handleAddBook = function (bookId) {
        console.log("setting pending book", bookId)
        setPendingBookId(bookId);
    }

    const userId = userContext?.userId 
    const {data} = useQuery({ queryKey: ['userData'], queryFn: getUserData(userId) })

    useEffect(() => {
        //sync users books
        if(pendingBookId !== 0 && userContext?.userId){
            //send the book we added to the user to persist it
            const result = addBookToUser(userContext?.userId, pendingBookId)
            //update state to reflect the updated list of books for our user
            let currentBooks = userBooks
            currentBooks.push(pendingBookId)
            setUserBooks(currentBooks)
        }
      }, [pendingBookId]);

      useEffect(() => {
        getBooks().then(data => {setBookList(data)});
      }, []);
    

   return (
       <>
           <p>Welcome to the application: {userContext?.username}</p>
           <p> add some books to your profile. Enjoy the bugs</p>

            <Row>
                <Col>
                <h2>My Books</h2>
                <ul>
                    {userBooks && userBooks?.map(item => <BookShopCard key={item} name={item} desc={null} setGenreOption={null}/>)}
                </ul>
                </Col>
                <Col>
                <h2>All Books</h2>
                <ul>
                    {bookList && bookList?.map(item => <BookShopCard key={item.id} name={item.id} desc={item.desc} setGenreOption={handleAddBook}/>)}
                </ul>
                </Col>
            </Row>
           
       </>
   )
}