import React, { useState } from 'react';
import { addAuthor } from '../api';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor({ name, country })
      .then(newAuthor => {
        console.log('New Author:', newAuthor);
        // Optionally update author list
      });
    setName('');
    setCountry('');
  };

  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AuthorForm;
