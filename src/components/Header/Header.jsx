import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`Header-area sticky top-0 z-50 bg-white py-5 transition-all duration-300 ${
                isSticky ? "shadow-lg" : "shadow-none"
            }`}
        >
            <div className="container mx-auto px-5">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;