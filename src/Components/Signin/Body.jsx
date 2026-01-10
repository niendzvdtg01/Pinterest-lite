import Header from "../Header";
import Login from './UI/mainpage'
import ControlledCarousel from "./UI/MainInsprition";
import Footer from "../Footer";
import UserAPI from './API/UserAPI'

export default function Body() {
    return (
        <>
            <Header />
            <Login />
            <ControlledCarousel />
            <Footer />
        </>
    );
}

