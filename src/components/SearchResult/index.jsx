import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

export const SearchResult = ({ data, onClick }) => {
    return (
        <Link to={`/product/${data.id}`}>
            <div className={styles.item} onClick={onClick}>
                <img src={data.imageUrl} alt={data.title} className={styles.itemImg} />
                <h4>{data.title}</h4>
                <p className={styles.itemPrice}>${data.price}</p>
            </div>
        </Link>
    );
};
