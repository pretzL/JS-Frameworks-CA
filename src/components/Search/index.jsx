import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { search } from "../../util/search";
import { SearchResult } from "../SearchResult";
import styles from "./Search.module.css";

export const SearchBar = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");

    const handleSearch = (evt) => {
        const results = search(data, searchTerm);
        setSearchResults([...results]);
    };

    const handleChange = (evt) => {
        const term = evt.target.value;
        setSearchTerm(term);
        const results = search(data, term);
        setSearchResults([...results]);
    };

    const handleClick = () => {
        onClose();
    };

    return (
        <>
            <form role="search" className={styles.searchForm} onSubmit={handleSearch}>
                <input id="search" type="search" placeholder="Search..." autoFocus required className={styles.searchInput} value={searchTerm} onChange={handleChange} />
                <button type="submit" className={styles.searchButton}>
                    Go
                </button>
            </form>
            {searchResults.length > 0 && (
                <div className={styles.searchResults}>
                    {searchResults.slice(0, 10).map((result) => (
                        <SearchResult data={result} key={result.id} onClick={handleClick} />
                    ))}
                </div>
            )}
        </>
    );
};
