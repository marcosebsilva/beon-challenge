import React from 'react';
import BookTable from './components/BookTable';
import Header from './components/Header';
import PageController from './components/PaginationController';

function App() {
  return (
    <>
      <Header />
      <BookTable />
      <PageController />
    </>
  );
}

export default App;
