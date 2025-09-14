import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import DataFetcher from './Components/APItest.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <DataFetcher /> */}
  </StrictMode >,
)
