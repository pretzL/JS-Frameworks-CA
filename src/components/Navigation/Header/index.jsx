import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const HeaderNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <span className="material-symbols-outlined">search</span>
                </li>
                <li>
                    <Link to="/">
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
