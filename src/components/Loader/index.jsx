import styles from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
        </div>
    );
};
