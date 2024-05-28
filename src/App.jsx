// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import PublisherList from './components/PublisherList';
import PublisherForm from './components/PublisherForm';
import Notification from './components/Notification';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Notification />
      <div className="main-content">
        <div className="section">
          <h2>Authors</h2>
          <AuthorForm />
          <AuthorList />
        </div>
        <div className="section">
          <h2>Books</h2>
          <BookForm />
          <BookList />
        </div>
        <div className="section">
          <h2>Publishers</h2>
          <PublisherForm />
          <PublisherList />
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;