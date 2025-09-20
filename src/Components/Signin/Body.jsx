import { FullPage, Slide } from "react-full-page";
import Header from "../Header";
import Login from './mainpage'
import ControlledCarousel from "./MainInsprition";
import Footer from "../Footer";

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

