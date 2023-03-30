import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";
import { Counter } from "../Counter";
import styles from "./CartProduct.module.css";

export const CartProduct = ({ data, onCountChange }) => {
    const products = useCartStore((state) => state.products);

    // Price handling
    const isDiscounted = products.price > products.discountedPrice;
    const priceClassNames = isDiscounted ? `${styles.price} ${styles.strikethrough}` : styles.price;
    const discountClassNames = isDiscounted ? `${styles.discountedPrice}` : styles.discountedPrice;
    const percentage = isDiscounted ? `${(((products.price - products.discountedPrice) / products.price) * 100).toFixed(0)}%` : null;

    const [price, setPrice] = useState(Math.min(data.price, data.discountedPrice));
    const handleCountChange = (newCount) => {
        const updatedPrice = Math.min(data.price, data.discountedPrice) * Math.max(newCount, 0);
        setPrice(updatedPrice);

        onCountChange(updatedPrice, Math.max(newCount, 0));
    };

    return (
        <div className={styles.card}>
            <Link to={`/product/${data.id}`}>
                <img src={data.imageUrl} alt={data.title} className={styles.productImage} />
            </Link>
            <div className={styles.cartItemText}>
                <h3 className={styles.productTitle}>{data.title}</h3>
                <div className={styles.ctaContainer}>
                    <div className={styles.priceContainer}>
                        {!isDiscounted && `NOK ${price.toFixed(2)}`}
                        <div className={priceClassNames}>{isDiscounted && `NOK ${price.toFixed(2)}`}</div>
                        <div className={styles.discountPriceContainer}>
                            {isDiscounted && <div className={discountClassNames}>- {percentage}</div>}
                            {isDiscounted && data.discountedPrice && `NOK ${price}`}
                        </div>
                    </div>
                    <Counter plusCount={1} minusCount={1} onCountChange={handleCountChange} cartItem={data} />
                </div>
            </div>
        </div>
    );
};
