import styles from "./Cart.module.css";
import tshirts from "../../assets/images/tshirts.png";
import { useCartStore } from "../../store";
import { CartProduct, ScreenLabel } from "../../components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Cart = () => {
    const products = useCartStore((state) => state.products);
    const clearProducts = useCartStore((state) => state.clearProducts);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        calculateTotalPrice();
    }, [products]);

    const calculateTotalPrice = () => {
        let sum = 0;
        products.forEach((product) => {
            const price = Math.min(product.price, product.discountedPrice);
            sum += price * (product.count || 1);
        });
        setTotalPrice(sum);
    };

    const handleCountChange = (updatedPrice, newCount, productId) => {
        const productIndex = products.findIndex((product) => product.id === productId);
        if (productIndex !== -1) {
            if (newCount === 0) {
                // Remove the product from the cart if the count is 0
                useCartStore.getState().deleteProduct(productId);
            } else {
                // Update the product count
                useCartStore.getState().updateProductCount(productId, newCount);
            }
        }
        calculateTotalPrice();
    };

    const [showLabel, setShowLabel] = useState(false);

    const handleUnmount = () => {
        setShowLabel(false);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        if (products.length === 0) {
            setShowLabel(true);
        } else {
            clearProducts();
            navigate("/checkout");
        }
    };

    return (
        <main className={styles.productPage}>
            <Helmet>
                <title>Cart | Bazaari</title>
            </Helmet>
            {showLabel && <ScreenLabel message={"You have no items in your cart to check out!"} onUnmount={handleUnmount} />}
            <img src={tshirts} alt="T-shirts" className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                <h2>Cart</h2>
                <div className={styles.cartList}>
                    {products.length === 0 ? (
                        <>
                            <p>Your cart is empty.</p>
                            <Link to="/" className={`cta large ${styles.checkoutBack}`}>
                                Back to shopping
                            </Link>
                        </>
                    ) : (
                        products.map((product) => (
                            <CartProduct data={product} key={product.id} onCountChange={(updatedPrice, newCount) => handleCountChange(updatedPrice, newCount, product.id)} />
                        ))
                    )}
                </div>
                <div className={styles.cartFooter}>
                    <span className={styles.totalPrice}>NOK {totalPrice.toFixed(2)}</span>
                    <Link to="/checkout" className="cta large" onClick={handleCheckout}>
                        Checkout
                    </Link>
                </div>
            </section>
        </main>
    );
};
