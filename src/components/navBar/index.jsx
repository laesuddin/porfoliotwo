import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from 'react-icons/fa'
import { navMenus } from "./config";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30} />
                    </Link>
                    <ul className="navbar_container_menu">
                        {
                            navMenus.map((item, key) => (
                                <li key={key} className="navbar_container_menu_item">
                                    <Link>
                                        to={item.to}
                                        className="navbar_container_menu_item_links"
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;