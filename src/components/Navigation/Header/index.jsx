import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../Search";
import styles from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    function toggleSearchBar() {
        setShowSearchBar(!showSearchBar);
    }
    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerUl}>
                <li className={styles.searchLi}>
                    {showSearchBar && <SearchBar />}
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
                    <Link to="/cart">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
