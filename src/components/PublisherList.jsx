import React, { useState, useEffect } from 'react';
import { fetchPublishers, deletePublisher } from '../api';
import Publisher from './PublisherForm';
import Loader from './Loader';

const PublisherList = () => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPublishers()
      .then(publishers => {
        setPublishers(publishers);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deletePublisher(id)
      .then(() => {
        setPublishers(publishers.filter(publisher => publisher.id !== id));
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="publisher-list">
      {publishers.map(publisher => (
        <Publisher key={publisher.id} publisher={publisher} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PublisherList;
