import styles from "./App.module.scss";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
