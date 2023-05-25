import React, { useEffect, useState } from 'react';
import { AddBook } from '../components/AddBook';
import { BookList } from '../components/BookList';
import { books_api_service } from '../services/api';

export const BookManager = () => {
  const [books, setBooks] = useState([]);
  const [errorMsg, setErrorMsg] = useState(undefined);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchBooksAsync() {
      try {
        const books = await books_api_service().getBooks();
        setBooks(books);
        setErrorMsg(undefined);
      } catch (ex) {
        setErrorMsg(ex);
      }
    }
    fetchBooksAsync();
  }, []);

  async function onSaveBook(data) {
    try {
      await books_api_service().addBook(data);
      const books = await books_api_service().getBooks();
      setBooks(books);
    } catch (ex) {}
  }

  return (
    <React.Fragment>
      <AddBook onSaveBook={onSaveBook} />
      {errorMsg && (
        <h5 style={{ color: 'red' }}>`"Something went wrong"${errorMsg}`</h5>
      )}
      <BookList booksData={books} />
    </React.Fragment>
  );
};
