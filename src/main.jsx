import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import DataFetcher from './Components/APItest.jsx';
import ControlledCarousel from './Components/body/MainInsprition.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ControlledCarousel />
    </BrowserRouter>
    {/* <DataFetcher /> */}
  </StrictMode >,
)
