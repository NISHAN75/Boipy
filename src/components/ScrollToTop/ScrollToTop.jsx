import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all hover:-translate-y-1 active:scale-90 z-50 cursor-pointer"
    >
      <HiArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;