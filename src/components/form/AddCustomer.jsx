import { useState } from "react";
import styles from "./AddCustomer.module.scss";

const AddCustomer = ({ isFormOpen, setIsFormOpen, handleFormData }) => {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        description: "",
        status: "Open",
        currency: "CAD",
        rate: "",
        balance: "",
        deposit: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalFormData = {
            ...formData,
            id: Date.now().toString().slice(3),
            rate: formatCurrency(formData.rate),
            balance: formatCurrency(formData.balance),
            deposit: formatCurrency(formData.deposit),
        };
        handleFormData({ ...finalFormData });

        setFormData({
            id: null,
            name: "",
            description: "",
            status: "",
            currency: "CAD",
            rate: "",
            balance: "",
            deposit: "",
        });

        function formatCurrency(currency) {
            return currency.includes("-") ? currency.toString().replace("-", "-$") : "$" + currency;
        }
    };

    return (
        <dialog open={isFormOpen} className={styles.formDialog}>
            <form onSubmit={handleSubmit} className={styles.addForm}>
                <div className={styles.formField}>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={formData.name} type="text" name="name" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="description">Description</label>
                    <textarea onChange={handleChange} name="description"></textarea>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="status">Status</label>
                    <select onChange={handleChange} name="status" value={formData.status}>
                        <option value="Open">Open</option>
                        <option value="Paid">Paid</option>
                        <option value="Due">Due</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="rate">Rate</label>
                    <input onChange={handleChange} value={formData.rate} type="number" name="rate" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="balance">Balance</label>
                    <input onChange={handleChange} value={formData.balance} type="number" name="balance" />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="deposit">Deposit</label>
                    <input onChange={handleChange} value={formData.deposit} type="number" name="deposit" />
                </div>
                <div className={styles.formButtons}>
                    <button type="submit">Add</button>
                    <button type="button" onClick={() => setIsFormOpen(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default AddCustomer;
