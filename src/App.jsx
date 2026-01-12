import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Body from './Components/Signin/Body';
import Gallery from './Components/Body/Gallery';
import Favourite from "./Components/Favourite/Favourite";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  )
}

export default App
