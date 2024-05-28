import React, { useState } from 'react';
import { addBook } from '../api';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, publisher })
      .then(newBook => {
        console.log('New Book:', newBook);
        // Optionally update book list
      });
    setTitle('');
    setAuthor('');
    setPublisher('');
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Publisher"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
