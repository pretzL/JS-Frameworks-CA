import { useEffect } from "react";
import styles from "./ScreenLabel.module.css";

export const ScreenLabel = ({ message, onUnmount }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onUnmount) {
                onUnmount();
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onUnmount]);

    return (
        <div className={styles.screenLabel}>
            <p className={styles.labelText}>{message}</p>
        </div>
    );
};
