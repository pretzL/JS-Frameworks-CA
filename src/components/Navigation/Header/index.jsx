import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../store";
import { SearchBar } from "../../Search";
import { useLocation } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
    const currentLocation = useLocation();
    const [showSearchBar, setShowSearchBar] = useState(false);

    function toggleSearchBar() {
        setShowSearchBar(!showSearchBar);
    }

    const handleCloseSearchBar = () => {
        setShowSearchBar(false);
    };

    const products = useCartStore((state) => state.products);
    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerUl}>
                <li className={styles.searchLi}>
                    {showSearchBar && <SearchBar onClose={handleCloseSearchBar} />}
                    <span className="material-symbols-outlined" onClick={toggleSearchBar}>
                        search
                    </span>
                </li>
                <li className={currentLocation.pathname === "/" ? styles.liActive : ""}>
                    <Link to="/">
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                </li>
                <li className={currentLocation.pathname === "/contact" ? styles.liActive : ""}>
                    <Link to="/contact">
                        <span className="material-symbols-outlined">contact_support</span>
                    </Link>
                </li>
                <li className={currentLocation.pathname === "/cart" ? styles.liActive : ""}>
                    <Link to="/cart">
                        <div className={styles.cartWrapper}>
                            <span className={styles.cartIndicator}>{products.reduce((total, product) => total + product.count, 0)}</span>
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
