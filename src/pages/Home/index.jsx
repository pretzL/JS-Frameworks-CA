import { Helmet } from "react-helmet";
import { Card, Hero, Loader } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Home.module.css";

export const Home = () => {
    const { data, isLoading, isError } = useFetch("https://api.noroff.dev/api/v1/online-shop");

    let content;
    if (isError) {
        content = <div className="error">There was an error loading the data.</div>;
    } else if (isLoading) {
        content = <Loader />;
    } else {
        content = data.map((item) => <Card data={item} key={item.id} />);
    }

    return (
        <main>
            <Helmet>
                <title>Home | Bazaari</title>
            </Helmet>
            <Hero />
            <div className={styles.divider}>Shop till you drop, from the comfort of your couch!</div>
            <div className={styles.heroSmall}></div>
            <section className={styles.contentSection}>
                <h2>Products</h2>
                <div className={styles.productContainer}>{content}</div>
            </section>
        </main>
    );
};
