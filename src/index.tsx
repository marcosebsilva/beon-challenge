import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from './context/SearchContext';
import { BooksProvider } from './context/BooksContext';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

Modal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <SearchProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </SearchProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
