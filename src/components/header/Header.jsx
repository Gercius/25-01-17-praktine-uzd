import styles from "./Header.module.scss";
import { SearchBar } from "./searchBar/SearchBar";
import { AddButton } from "./AddButton/AddButton";

export const Header = () => {
    return (
        <header>
            <SearchBar />
            <AddButton />
        </header>
    );
};
