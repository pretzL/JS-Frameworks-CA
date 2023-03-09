import { Hero } from "../../components";
import styles from "./Home.module.css";

export const Home = () => {
    return (
        <main>
            <Hero />
            <div className={styles.divider}>Some kind of sloagan here.</div>
        </main>
    );
};
