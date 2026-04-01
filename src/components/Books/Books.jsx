import { useEffect, useRef, useState } from "react";
import Book from "../Book/Book";

const BOOKS_PER_PAGE = 6;

const Books = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // ✅ section ref for dynamic scroll
    const sectionRef = useRef(null);

    const totalPages = Math.ceil(data.length / BOOKS_PER_PAGE);

    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const currentBooks = data.slice(startIndex, startIndex + BOOKS_PER_PAGE);

    // Reset page when data changes
    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;

        setLoading(true);

        // ✅ precise offset calculation
        const offsetTop =
            sectionRef.current?.getBoundingClientRect().top + window.scrollY || 0;

        window.scrollTo({
            top: offsetTop - 50, // 100px offset for better visibility
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

    return (
        <section ref={sectionRef} className="all-books-area py-16">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl font-bold mb-5 text-center">Books</h2>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: BOOKS_PER_PAGE }).map((_, i) => (
                              <div
                                  key={i}
                                  className="h-40 bg-gray-200 animate-pulse rounded-xl"
                              ></div>
                          ))
                        : currentBooks.map((singleBook) => (
                              <Book key={singleBook.id} book={singleBook} />
                          ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <div className="join">
                            {/* Prev */}
                            <button
                                className="join-item btn btn-outline"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                «
                            </button>

                            {/* Page Numbers */}
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

                            {/* Next */}
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

                {/* Info */}
                <p className="text-center text-gray-500 mt-4 text-sm">
                    Showing {startIndex + 1}–
                    {Math.min(startIndex + BOOKS_PER_PAGE, data.length)} of {data.length} books
                </p>
            </div>
        </section>
    );
};

export default Books;