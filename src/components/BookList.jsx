import React, { useEffect, useState } from "react";
import {books_api_service} from "../services/api";
import {BookListItem} from "./BookListItem";

export const BookList=()=>{
    const [data, setData] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        async function fetchBooksAsync(){
            const books = await books_api_service();
            setData(books);
        }
        fetchBooksAsync();
    },[])

    return <React.Fragment>
        <h1>Books collection in our store</h1>
        {
            data.map(book => 
                <div key={book.id}>
                    <BookListItem {...book}/>
                </div>
            )
        }
    </React.Fragment>
}