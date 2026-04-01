import { useOutletContext } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
    const data = useOutletContext();
    console.log(data);
    
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