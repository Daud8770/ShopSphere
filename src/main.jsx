import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store.jsx';
import { Toaster } from 'react-hot-toast'; // <-- Yahan import kar

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster /> {/* <-- Yeh line add karni zaroori hai */}
    </Provider>
  </BrowserRouter>
);