import styles from "./AddButton.module.scss";
import addIcon from "../../../assets/add.svg";

export const AddButton = ({ setIsFormOpen }) => {
    return (
        <button onClick={() => setIsFormOpen(true)} className={styles.button}>
            <img src={addIcon} alt="Plus sign icon" />
            Add Customer
        </button>
    );
};
