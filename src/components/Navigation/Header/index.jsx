import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../store";
import { SearchBar } from "../../Search";
import styles from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
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
                <li>
                    <Link to="/">
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span class="material-symbols-outlined">contact_support</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <div className={styles.cartWrapper}>
                            <span className={styles.cartIndicator}>{products.length}</span>
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
