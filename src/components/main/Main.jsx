import styles from "./Main.module.scss";
import { Table } from "./table/Table";

export const Main = ({ isFormOpen, tableData }) => {
    return (
        <main className={styles.main}>
            <Table tableData={tableData} />
        </main>
    );
};
