import Header from "./Header"
import Login from "./mainpage";
import ControlledCarousel from "./MainInsprition";
import { Link, Element } from "react-scroll";

export default function Body() {
    return (
        <div>
            <Header />

            <Element>
                <Login />
            </Element>

            {/* <Element name="login" className="h-screen bg-green-400 flex justify-center items-center">
                <ControlledCarousel />
            </Element> */}
        </div>
    )
}
