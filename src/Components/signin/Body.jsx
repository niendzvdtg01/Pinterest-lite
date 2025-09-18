import { FullPage, Slide } from "react-full-page";
import Header from "./Header";
import Login from "./mainpage";
import ControlledCarousel from "./MainInsprition";

export default function Body() {
    return (
        <div>
            <Header />

            <FullPage duration={100}>
                <Slide>
                    <div>
                        <Login />
                    </div>
                </Slide>
                <Slide>
                    <div>
                        <ControlledCarousel />
                    </div>
                </Slide>
            </FullPage>
        </div>
    );
}

