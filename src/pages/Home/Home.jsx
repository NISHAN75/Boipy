import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
    const data = useLoaderData();
    return (
        <>
            {/* banner section */}
            <Banner />
            {/* Books */}
            <Books data={data} />
        </>
    );
};

export default Home;