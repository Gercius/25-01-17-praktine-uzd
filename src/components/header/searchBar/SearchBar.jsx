import styles from "./SearchBar.module.scss";
import filterIcon from "../../../assets/filter.svg";
import searchIcon from "../../../assets/search.svg";

export const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <button type="button" className={styles.filterBtn}>
                <img className={styles.icon} src={filterIcon} alt="Filter icon" />
            </button>
            <form>
                <div className={styles.searchInput}>
                    <img src={searchIcon} alt="Search icon" />
                    <input type="text" placeholder="Search..." />
                </div>
            </form>
        </div>
    );
};
