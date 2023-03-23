import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";
import { ScreenLabel } from "../ScreenLabel/ScreenLabel";
import styles from "./Card.module.css";

export const Card = ({ data }) => {
    const addProduct = useCartStore((state) => state.addProduct);

    const [showLabel, setShowLabel] = useState(false);

    const handleUnmount = () => {
        setShowLabel(false);
    };

    // Price handling
    const isDiscounted = data.price > data.discountedPrice;
    const priceClassNames = isDiscounted ? `${styles.price} ${styles.strikethrough}` : styles.price;
    const discountClassNames = isDiscounted ? `${styles.discountedPrice}` : styles.discountedPrice;
    const percentage = isDiscounted ? `${(((data.price - data.discountedPrice) / data.price) * 100).toFixed(0)}%` : null;
    return (
        <div className={styles.card}>
            {showLabel && <ScreenLabel message={`${data.title} added to cart!`} onUnmount={handleUnmount} />}
            <Link to={`/product/${data.id}`}>
                <img src={data.imageUrl} alt={data.title} className={styles.productImage} />
            </Link>
            <h3 className={styles.productTitle}>{data.title}</h3>
            <div className={styles.ratingContainer}>
                <div className={styles.rating}>
                    <span className="material-symbols-outlined">star</span>
                    {data.rating}
                </div>
                <div className={styles.priceContainer}>
                    {!isDiscounted && `$ ${data.price}`}
                    <div className={priceClassNames}>{isDiscounted && `$ ${data.price}`}</div>
                    <div className={styles.discountPriceContainer}>
                        {isDiscounted && <div className={discountClassNames}>- {percentage}</div>}
                        {isDiscounted && data.discountedPrice && `$ ${data.discountedPrice}`}
                    </div>
                </div>
            </div>
            <div className={styles.ctaContainer}>
                <span
                    className="material-symbols-outlined"
                    onClick={() => {
                        setShowLabel(true);
                        addProduct(data);
                    }}
                >
                    shopping_cart
                </span>
                <Link to={`/product/${data.id}`}>
                    <button className="cta">Show more</button>
                </Link>
            </div>
        </div>
    );
};
