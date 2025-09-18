import { DatePicker } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ControlledCarousel from './Components/signin/MainInsprition';
import Login from './Components/signin/mainpage'
import Body from './Components/signin/Body';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Body />} />
    </Routes>
  )
}

export default App
