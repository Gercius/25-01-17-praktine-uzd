import styles from "./Table.module.scss";
import arrowIcon from "../../../assets/arrow.svg";
import { Row } from "./Row";

export const Table = ({ tableData }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    <th>
                        #
                        <div className={styles.arrows}>
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow up icon" />
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow down icon" />
                        </div>
                    </th>
                    <th>
                        Name
                        <div className={styles.arrows}>
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow up icon" />
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow down icon" />
                        </div>
                    </th>
                    <th>Description</th>
                    <th>
                        Status
                        <div className={styles.arrows}>
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow up icon" />
                            <img className={styles.arrow} src={arrowIcon} alt="Arrow down icon" />
                        </div>
                    </th>
                    <th>Rate</th>
                    <th>Balance</th>
                    <th>Deposit</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                <tr className={styles.spacer}></tr>
            </tbody>
        </table>
    );
};
