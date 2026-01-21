import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Body from './Components/Signin/Body';
import Gallery from './Components/Body/Gallery';
import Favourite from "./Components/Favourite/Favourite";
import Profilepage from "./Components/Profilepage/Profilepage";
import Category from "./Components/CategoryPage/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  )
}

export default App
