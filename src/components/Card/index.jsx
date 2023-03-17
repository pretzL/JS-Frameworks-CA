import { Link } from "react-router-dom";
import { useCartStore } from "../../store";
import styles from "./Card.module.css";

export const Card = ({ data }) => {
    const addProduct = useCartStore((state) => state.addProduct);

    return (
        <div className={styles.card}>
            <Link to={`/product/${data.id}`}>
                <img src={data.imageUrl} alt={data.title} className={styles.productImage} />
            </Link>
            <h3 className={styles.productTitle}>{data.title}</h3>
            <p className={styles.productDescription}>{data.description}</p>
            <div className={styles.ctaContainer}>
                <span className="material-symbols-outlined" onClick={() => addProduct(data)}>
                    shopping_cart
                </span>
                <Link to={`/product/${data.id}`}>
                    <button className="cta">Show more</button>
                </Link>
            </div>
        </div>
    );
};
