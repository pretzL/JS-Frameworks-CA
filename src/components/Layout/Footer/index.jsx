import styles from "./Footer.module.css";
import logoBlack from "../../../assets/logo/Black logo - no background.png";
import { FooterNavigation } from "../../Navigation/Footer";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.footerText}>
                <img src={logoBlack} alt="Bazaari logo" className={styles.logo} />
                <p>
                    Welcome to Bazaari, the ultimate online shopping destination for fashion-conscious individuals! We are a one-stop-shop for all your fashion needs, offering a
                    wide range of products that are trendy, stylish, and affordable.
                </p>
                <p>Thank you for choosing Bazaari, and we hope you enjoy your shopping experience with us!</p>
            </div>
            <div className={styles.navigationContainer}>
                <h3>Quick links</h3>
                <FooterNavigation />
            </div>
        </footer>
    );
};
