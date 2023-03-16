import styles from "./Cart.module.css";
import tshirts from "../../assets/images/tshirts.png";
import { useCartStore } from "../../store";
import { CartProduct } from "../../components/CartProduct";

export const Cart = () => {
    const products = useCartStore((state) => state.products);
    const addProduct = useCartStore((state) => state.addProduct);
    const deleteProduct = useCartStore((state) => state.deleteProduct);
    const clearProducts = useCartStore((state) => state.clearProducts);
    const getProducts = useCartStore((state) => state.getProducts);

    console.log(products);

    return (
        <main className={styles.productPage}>
            <img src={tshirts} alt="T-shirts" className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                <h2>Cart</h2>
                <div className={styles.cartList}>
                    {products.map((product) => (
                        <CartProduct data={product} key={product.id} />
                    ))}
                </div>
                <div className={styles.cartFooter}>
                    <span className={styles.totalPrice}>$0.00</span>
                    <button className="cta large">Checkout</button>
                </div>
            </section>
        </main>
    );
};
