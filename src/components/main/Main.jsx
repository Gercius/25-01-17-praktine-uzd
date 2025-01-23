import styles from "./Main.module.scss";
import { Table } from "./table/Table";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Table />
        </main>
    );
};
