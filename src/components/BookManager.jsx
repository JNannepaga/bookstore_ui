import React, {useEffect, useState} from "react";
import {AddBook} from "../components/AddBook";
import {BookList} from "../components/BookList";
import {books_api_service} from "../services/api";

export const BookManager=()=>{
    const [books, setBooks] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        async function fetchBooksAsync(){
            const books = await books_api_service().getBooks();
            setBooks(books);
        }
        fetchBooksAsync();
    },[])

    
    
    async function onSaveBook(data){
        try{
            await books_api_service().addBook(data);
            const books = await books_api_service().getBooks();
            setBooks(books);
        }
        catch(ex){

        }
    }

    return(
    <React.Fragment>
        <AddBook onSaveBook={onSaveBook}/>
        <BookList booksData={books}/>
    </React.Fragment>)   
}