import { useParams } from "react-router-dom";
import { Comment } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { useCartStore } from "../../store";
import styles from "./Product.module.css";

export const Product = () => {
    let params = useParams();
    const { data, isLoading, isError } = useFetch(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);
    const addProduct = useCartStore((state) => state.addProduct);

    // Price handling
    const isDiscounted = data.price > data.discountedPrice;
    const priceClassNames = isDiscounted ? `${styles.price} ${styles.strikethrough}` : styles.price;
    const discountClassNames = isDiscounted ? `${styles.discountedPrice}` : styles.discountedPrice;
    const percentage = isDiscounted ? `${(((data.price - data.discountedPrice) / data.price) * 100).toFixed(0)}%` : null;
    return (
        <main className={styles.productPage}>
            <img src={data.imageUrl} alt={data.title} className={styles.productImageLarge} />
            <section className={styles.productInfo}>
                <h2>{data.title}</h2>
                <div className={styles.divider}></div>
                <p>{data.description}</p>
                <div className={`${styles.divider} ${styles.second}`}></div>
                <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                        <span className="material-symbols-outlined noclick">star</span>
                        {data.rating}
                    </div>
                    <div className={styles.reviews}>{data && data.reviews ? data.reviews.length : 0} reviews</div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.priceContainer}>
                        {!isDiscounted && `NOK ${data.price}`}
                        <div className={priceClassNames}>{isDiscounted && `NOK ${data.price}`}</div>
                        <div className={styles.discountPriceContainer}>
                            {isDiscounted && <div className={discountClassNames}>- {percentage}</div>}
                            {isDiscounted && data.discountedPrice && `NOK ${data.discountedPrice}`}
                        </div>
                    </div>
                    <button className="cta large" onClick={() => addProduct(data)}>
                        Add to cart
                    </button>
                </div>
                <div>
                    <h3 className={styles.reviewsTitle}>Reviews</h3>
                    <div className={styles.reviewsContainer}>
                        {data.reviews && data.reviews.length > 0 ? data.reviews.map((item) => <Comment data={item} key={item.id} />) : <p>No reviews</p>}
                    </div>
                </div>
            </section>
        </main>
    );
};
