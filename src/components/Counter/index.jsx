import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = ({ plusCount = 1, minusCount = 1, onCountChange }) => {
    const [count, setCount] = useState(1);

    const handlePlus = () => {
        const newCount = count + plusCount;
        setCount(newCount);
        onCountChange(newCount);
    };

    const handleMinus = () => {
        const newCount = count - minusCount;
        setCount(newCount);
        onCountChange(newCount);
    };

    return (
        <div className={styles.counter}>
            <button className={`${styles.button} ${styles.buttonPlus}`} onClick={handlePlus}>
                +
            </button>
            <span className={styles.count}>{count}</span>
            <button className={`${styles.button} ${styles.buttonMinus}`} onClick={handleMinus}>
                -
            </button>
        </div>
    );
};
