import { Link } from "react-router-dom";
import styles from "./FooterNavigation.module.css";

export const FooterNavigation = () => {
    return (
        <nav>
            <ul className={styles.footerNav}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};
