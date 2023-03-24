import { Card, Hero } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Home.module.css";

export const Home = () => {
    const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");

    let content;
    if (isError) {
        content = <div className="error">There was an error loading the data.</div>;
    } else if (isLoading) {
        content = <div>Loading...</div>;
    } else {
        content = data.map((item) => <Card data={item} key={item.id} />);
    }

    return (
        <main>
            <Hero />
            <div className={styles.divider}>Some kind of slogan here.</div>
            <div className={styles.heroSmall}></div>
            <section className={styles.contentSection}>
                <h2>Highest Rated</h2>
                <div className={styles.productContainer}>{content}</div>
            </section>
        </main>
    );
};
