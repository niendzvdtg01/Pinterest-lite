import Header from "../Header";
import Login from './UI/mainpage'
import ControlledCarousel from "./UI/MainInsprition";
import Footer from "../Footer";
import UserAPI from './API/UserAPI'
import { UserProvider } from "./API/handleUserAPI";

export default function Body() {
    return (
        <UserProvider>
            <Header />
            <Login />
            <ControlledCarousel />
            <Footer />
        </UserProvider>
    );
}

