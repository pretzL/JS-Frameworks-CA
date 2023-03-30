import styles from "./Checkout.module.css";
import tshirts from "../../assets/images/tshirts.png";
import { Link } from "react-router-dom";

export const Checkout = () => {
    return (
        <main className={styles.productPage}>
            <img src={tshirts} alt="T-shirts" className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                <h2>Checkout successful!</h2>
                <div className={styles.divider}></div>
                <p>
                    Thank you so much for your order. We appreciate your trust and hope you will be satisfied with your purchase. You will receive an order confirmation to the
                    email you provided with your order shortly.
                </p>
                <p>Your order number is #00001.</p>
                <div className={`${styles.divider} ${styles.second}`}></div>
                <Link to="/" className={`cta large ${styles.checkoutBack}`}>
                    Back to shopping
                </Link>
            </section>
        </main>
    );
};
