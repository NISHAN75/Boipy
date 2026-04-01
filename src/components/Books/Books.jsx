import { useEffect, useRef, useState } from "react";
import Book from "../Book/Book";

const BOOKS_PER_PAGE = 6;

const Books = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(() => {
        return Number(sessionStorage.getItem("currentPage")) || 1;  // ✅ restore saved page
    });
    const [loading, setLoading] = useState(false);

    const sectionRef = useRef(null);

    const safeData = Array.isArray(data) ? data : data?.books || [];

    const totalPages = Math.ceil(safeData.length / BOOKS_PER_PAGE);

    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const currentBooks = safeData.slice(startIndex, startIndex + BOOKS_PER_PAGE);

    // ✅ Save page to sessionStorage whenever it changes
    useEffect(() => {
        sessionStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setLoading(true);

        const offsetTop =
            sectionRef.current?.getBoundingClientRect().top + window.scrollY || 0;

        window.scrollTo({
            top: offsetTop - 50,
            behavior: "smooth",
        });

        setTimeout(() => {
            setCurrentPage(page);
            setLoading(false);
        }, 400);
    };

    const getVisiblePages = () => {
        const pages = [];
        for (
            let i = Math.max(1, currentPage - 2);
            i <= Math.min(totalPages, currentPage + 2);
            i++
        ) {
            pages.push(i);
        }
        return pages;
    };

    if (!Array.isArray(safeData) || safeData.length === 0) {
        return (
            <section className="py-16 text-center">
                <p className="text-gray-500">No books available</p>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="all-books-area py-16">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-bold mb-5 text-center">Books</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: BOOKS_PER_PAGE }).map((_, i) => (
                              <div
                                  key={i}
                                  className="h-40 bg-gray-200 animate-pulse rounded-xl"
                              ></div>
                          ))
                        : currentBooks.map((singleBook) => (
                              <Book
                                  key={singleBook.bookId || singleBook.id}
                                  book={singleBook}
                              />
                          ))}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <div className="join">
                            <button
                                className="join-item btn btn-outline"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                «
                            </button>

                            {getVisiblePages().map((page) => (
                                <button
                                    key={page}
                                    className={`join-item btn ${
                                        currentPage === page
                                            ? "btn-active btn-success"
                                            : "btn-outline"
                                    }`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className="join-item btn btn-outline"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                »
                            </button>
                        </div>
                    </div>
                )}

                <p className="text-center text-gray-500 mt-4 text-sm">
                    Showing {startIndex + 1}–
                    {Math.min(startIndex + BOOKS_PER_PAGE, safeData.length)} of{" "}
                    {safeData.length} books
                </p>
            </div>
        </section>
    );
};

export default Books;