import { Card, Hero } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Home.module.css";

export const Home = () => {
    const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");
    return (
        <main>
            <Hero />
            <div className={styles.divider}>Some kind of sloagan here.</div>
            <div className={styles.heroSmall}></div>
            <section className={styles.contentSection}>
                <h2>Highest Rated</h2>
                <div className={styles.productContainer}>
                    {data.map((item) => (
                        <Card data={item} key={item.id} />
                    ))}
                </div>
            </section>
        </main>
    );
};
