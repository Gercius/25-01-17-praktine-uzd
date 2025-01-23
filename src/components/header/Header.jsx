import styles from "./Header.module.scss";
import { SearchBar } from "./searchBar/SearchBar";
import { AddButton } from "./addButton/AddButton";

export const Header = () => {
    return (
        <header className={styles.header}>
            <SearchBar />
            <AddButton />
        </header>
    );
};
