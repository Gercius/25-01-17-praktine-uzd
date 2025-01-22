import styles from "./Table.module.scss";
import arrowIcon from "../../../assets/arrow.svg";
import { data } from "../../../data/data";
import { Row } from "./Row";

export const Table = () => {
    return (
        <table>
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
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
                {data.map((item, index) => (
                    <Row key={item.id} item={item} index={index} />
                ))}
            </tbody>
        </table>
    );
};
