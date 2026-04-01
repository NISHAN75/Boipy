import { Outlet, useLoaderData } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Root.css";

const Root = () => {
    const data = useLoaderData();

    return (
        <>
            <Header />
            <main>
                <Outlet context={data} />
            </main>
            <Footer />
        </>
    );
};

export default Root;