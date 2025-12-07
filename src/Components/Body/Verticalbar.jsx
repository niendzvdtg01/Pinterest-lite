import React, { useState } from "react";
import menu from './img/ menu.svg'
const CustomNav = ({ li }) => {
    const [window, setWindow] = useState(false);

    let openClose = () => {
        if (window === false) {
            setWindow(true);
        } else {
            setWindow(false);
        }
    };
    return (
        <div className="position-fixed">
            <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
                <div className="burger" onClick={() => openClose()}>
                    <img src={menu} alt="burger" />
                </div>
                <div className="burger_items">
                    <ul className="navbar__list" >
                        {li.map((item, i) => (
                            <div className="navbar__li-box" key={i}>
                                <img
                                    src={item[1]}
                                    alt={item[1]}
                                    style={{ paddingLeft: window === false ? 27 : 17 }}
                                />
                                <li
                                    className="navbar__li"
                                    style={{ display: window === false ? "inline-block" : "none" }}
                                >
                                    {item[0]}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default CustomNav;