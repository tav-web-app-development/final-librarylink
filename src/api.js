// Simulated data
let authors = [
    { id: 1, name: 'Author One', country: 'Country One' },
    { id: 2, name: 'Author Two', country: 'Country Two' }
  ];
  let authorId = 3;
  
  let books = [
    { id: 1, title: 'Book One', author: 'Author One', publisher: 'Publisher One' },
    { id: 2, title: 'Book Two', author: 'Author Two', publisher: 'Publisher Two' }
  ];
  let bookId = 3;
  
  let publishers = [
    { id: 1, name: 'Publisher One', address: '123 Main St' },
    { id: 2, name: 'Publisher Two', address: '456 Elm St' }
  ];
  let publisherId = 3;
  
  // Simulated API functions
  export const fetchAuthors = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(authors), 1000); // Simulate delay
    });
  };
  
  export const deleteAuthor = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        authors = authors.filter(author => author.id !== id);
        resolve();
      }, 1000); // Simulate delay
    });
  };
  
  export const addAuthor = (newAuthor) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = authorId++;
        newAuthor.id = id;
        authors.push(newAuthor);
        resolve(newAuthor);
      }, 1000); // Simulate delay
    });
  };
  
  export const fetchBooks = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(books), 1000); // Simulate delay
    });
  };
  
  export const deleteBook = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        books = books.filter(book => book.id !== id);
        resolve();
      }, 1000); // Simulate delay
    });
  };
  
  export const addBook = (newBook) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = bookId++;
        newBook.id = id;
        books.push(newBook);
        resolve(newBook);
      }, 1000); // Simulate delay
    });
  };
  
  export const fetchPublishers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(publishers), 1000); // Simulate delay
    });
  };
  
  export const deletePublisher = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        publishers = publishers.filter(publisher => publisher.id !== id);
        resolve();
      }, 1000); // Simulate delay
    });
  };
  
  export const addPublisher = (newPublisher) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = publisherId++;
        newPublisher.id = id;
        publishers.push(newPublisher);
        resolve(newPublisher);
      }, 1000); // Simulate delay
    });
  };
  