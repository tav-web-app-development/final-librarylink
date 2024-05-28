import React, { useState, useEffect } from 'react';
import { fetchBooks, deleteBook } from '../api';
import Book from './BookForm';
import Loader from './Loader';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchBooks()
      .then(books => {
        setBooks(books);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deleteBook(id)
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BookList;
