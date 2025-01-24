import "./App.scss";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";
import { useState } from "react";
import AddCustomer from "../form/AddCustomer";
import { data } from "../../data/data";

export const App = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [tableData, setTableData] = useState([...data]);

    const handleFormData = (data) => {
        console.log(data);
        setTableData((prevData) => {
            return [data, ...prevData];
        });
        setIsFormOpen(false);
    };

    return (
        <>
            <Header setIsFormOpen={setIsFormOpen} />
            <Main tableData={tableData} />
            <Footer />
            <AddCustomer isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} handleFormData={handleFormData} />
        </>
    );
};
