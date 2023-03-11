import { useFetch } from "../../hooks/useFetch";
import styles from "./Product.module.css";

export const Product = ({ id }) => {
    const { data, isLoading, isError } = useFetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
    console.log(data);
    return (
        <main className={styles.productPage}>
            <img src={data.imageUrl} alt={data.title} className={styles.productImageLarge} />
            <h2>Product</h2>
        </main>
    );
};
