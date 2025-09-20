import { DatePicker } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Body from './Components/Signin/Body';
import Gallery from './Components/Body/Gallery';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/home' element={<Gallery />} />
    </Routes>
  )
}

export default App
