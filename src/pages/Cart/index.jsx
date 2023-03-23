import styles from "./Cart.module.css";
import tshirts from "../../assets/images/tshirts.png";
import { useCartStore } from "../../store";
import { CartProduct } from "../../components/CartProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
    const products = useCartStore((state) => state.products);
    const clearProducts = useCartStore((state) => state.clearProducts);
    const [totalPrice, setTotalPrice] = useState(0);

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
                const updatedProduct = {
                    ...products[productIndex],
                    count: newCount,
                };
                useCartStore.getState().updateProduct(updatedProduct);
            }
        }
        calculateTotalPrice();
    };

    return (
        <main className={styles.productPage}>
            <img src={tshirts} alt="T-shirts" className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                <h2>Cart</h2>
                <div className={styles.cartList}>
                    {products.map((product) => (
                        <CartProduct data={product} key={product.id} onCountChange={(updatedPrice, newCount) => handleCountChange(updatedPrice, newCount, product.id)} />
                    ))}
                </div>
                <div className={styles.cartFooter}>
                    <span className={styles.totalPrice}>NOK {totalPrice.toFixed(2)}</span>
                    <Link to="/checkout" className="cta large" onClick={() => clearProducts()}>
                        Checkout
                    </Link>
                </div>
            </section>
        </main>
    );
};
