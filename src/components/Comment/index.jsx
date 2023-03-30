import styles from "./Comment.module.css";

export const Comment = ({ data }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentHeader}>
                <p className={styles.rating}>
                    <span className="material-symbols-outlined noclick">star</span> {data.rating}{" "}
                </p>
                <h4>{data.username}</h4>
            </div>
            <p>{data.description}</p>
        </div>
    );
};
