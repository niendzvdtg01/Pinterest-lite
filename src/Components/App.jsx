import { BrowserRouter } from "react-router-dom";
import Body from "./Signin/Body";
import Gallery from "./Body/Gallery";
import Favourite from "./Favourite/Favourite";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/home" element={<Gallery />} />
            <Route path="favourite" element={<Favourite />} />
        </Routes>
    )
}