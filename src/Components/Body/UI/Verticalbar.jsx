import React, { useState } from "react";
import menu from '../img/ menu.svg'
import { useNavigate } from "react-router-dom";

const CustomNav = ({ li }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="position-fixed">
            <nav
                className="navbar-menu shadow-sm"
                style={{ width: collapsed ? "4rem" : "14rem" }}
            >
                {/* Burger */}
                <div
                    className="burger d-flex justify-content-center align-items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <img src={menu} alt="Menu" />
                </div>

                {/* Menu items */}
                <div className="burger_items">
                    <ul className="navbar__list">
                        {li.map((item, i) => (
                            <div
                                key={i}
                                className="navbar__li-box d-flex align-items-center"
                                onClick={() => navigate(item[2])}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={item[1]}
                                    alt={item[0]}
                                    style={{
                                        paddingLeft: collapsed ? 17 : 27
                                    }}
                                />

                                <li
                                    className="navbar__li ms-2"
                                    style={{
                                        display: collapsed ? "none" : "inline-block"
                                    }}
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
