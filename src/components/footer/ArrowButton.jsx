import styles from "./ArrowButton.module.scss";
import arrowIcon from "../../assets/arrow2.svg";

const ArrowButton = ({ direction }) => {
    return (
        <button className={`${styles.button} ${direction === "right" && styles.right}`}>
            <img src={arrowIcon} alt={`${direction} pointing arrow icon`} />
        </button>
    );
};

export default ArrowButton;
