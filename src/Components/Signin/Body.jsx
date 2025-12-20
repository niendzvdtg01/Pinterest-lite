import { FullPage, Slide } from "react-full-page";
import Header from "../Header";
import Login from './mainpage'
import ControlledCarousel from "./MainInsprition";
import Footer from "../Footer";
import UserAPI from "./UserAPI";

export default function Body() {
    return (
        <>
            <Header />
            <UserAPI />
            <ControlledCarousel />
            <Footer />
        </>
    );
}

