import React, { useState } from 'react';
import { addPublisher } from '../api';

const PublisherForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPublisher({ name, address })
      .then(newPublisher => {
        console.log('New Publisher:', newPublisher);
        // Optionally update publisher list
      });
    setName('');
    setAddress('');
  };

  return (
    <form className="publisher-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add Publisher</button>
    </form>
  );
};

export default PublisherForm;
