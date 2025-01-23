import styles from "./Footer.module.scss";
import ArrowButton from "./ArrowButton";
import arrowIcon from "../../assets/arrow2.svg";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.showCount}>1-10 of 97</p>
            <div className={styles.showPerPage}>
                <p>
                    Rows per page: <span className={styles.count}>10</span>
                    <span>
                        <img src={arrowIcon} alt="Down pointing arrow icon" />
                    </span>
                </p>
            </div>
            <div className={styles.pageNumber}>
                <ArrowButton direction={"left"} />
                <span>1/10</span>
                <ArrowButton direction={"right"} />
            </div>
        </footer>
    );
};
