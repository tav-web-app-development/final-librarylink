import React, { useState, useEffect } from 'react';
import { fetchAuthors, deleteAuthor } from '../api';
import Author from './AuthorForm';
import Loader from './Loader';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAuthors()
      .then(authors => {
        setAuthors(authors);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deleteAuthor(id)
      .then(() => {
        setAuthors(authors.filter(author => author.id !== id));
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="author-list">
      {authors.map(author => (
        <Author key={author.id} author={author} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default AuthorList;
