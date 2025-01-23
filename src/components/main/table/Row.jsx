import styles from "./Row.module.scss";

export const Row = ({ item, index }) => {
    return (
        <tr className={styles.tr}>
            <td>
                <input type="checkbox" />
            </td>
            <td className={styles.number}>{index + 1}</td>
            <td>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.id}>{item.id}</p>
            </td>
            <td className={styles.description}>{item.description}</td>
            <td className={styles.status}>
                <span className={`${styles[item.status.toLowerCase()]}`}>{item.status}</span>
            </td>
            <td>
                <p className={styles.rate}>{item.rate}</p>
                <p className={styles.currency}>{item.currency}</p>
            </td>
            <td>
                <p className={`${styles.balance} ${item.balance.includes("-") && styles.negative}`}>{item.balance}</p>
                <p className={styles.currency}>{item.currency}</p>
            </td>
            <td>
                <p className={styles.deposit}>{item.deposit}</p>
                <p className={styles.currency}>{item.currency}</p>
            </td>
        </tr>
    );
};
