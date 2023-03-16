import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";
import { Counter } from "../Counter";
import styles from "./CartProduct.module.css";

export const CartProduct = ({ data }) => {
    const products = useCartStore((state) => state.products);
    const addProduct = useCartStore((state) => state.addProduct);

    // Price handling
    const isDiscounted = products.price > products.discountedPrice;
    const priceClassNames = isDiscounted ? `${styles.price} ${styles.strikethrough}` : styles.price;
    const discountClassNames = isDiscounted ? `${styles.discountedPrice}` : styles.discountedPrice;
    const percentage = isDiscounted ? `${(((products.price - products.discountedPrice) / products.price) * 100).toFixed(0)}%` : null;

    const [price, setPrice] = useState(Math.min(data.price, data.discountedPrice));
    const handleCountChange = (newCount) => {
        console.log("Counter value:", newCount);
        const updatedPrice = Math.min(data.price, data.discountedPrice) * newCount;
        setPrice(updatedPrice);
        console.log(updatedPrice);
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
                        {!isDiscounted && `$ ${price}`}
                        <div className={priceClassNames}>{isDiscounted && `$ ${price}`}</div>
                        <div className={styles.discountPriceContainer}>
                            {isDiscounted && <div className={discountClassNames}>- {percentage}</div>}
                            {isDiscounted && data.discountedPrice && `$ ${price}`}
                        </div>
                    </div>
                    <Counter plusCount={1} minusCount={1} onCountChange={handleCountChange} />
                </div>
            </div>
        </div>
    );
};
