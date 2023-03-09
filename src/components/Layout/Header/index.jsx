import { HeaderNavigation } from "../../Navigation/Header";
import styles from "./Header.module.css";
import logoColored from "../../../assets/logo/Color logo - no background.png";

export const Header = () => {
    return (
        <header>
            <div className={styles.contentWrap}>
                <img src={logoColored} alt="Bazaari logo" className={styles.logo} />
                <HeaderNavigation />
            </div>
        </header>
    );
};
