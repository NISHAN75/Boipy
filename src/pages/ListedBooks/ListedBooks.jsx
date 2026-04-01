import { useState } from 'react';
import { HiOutlineUsers } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { useOutletContext } from 'react-router';
import { getStoredBook } from '../../components/Utility/addToDB';


const ListedBooks = () => {
    const data = useOutletContext();
    const [activeTab, setActiveTab] = useState('read');
    const [sortBy, setSortBy] = useState(null);

    // ✅ Get all books from context
    const safeData = Array.isArray(data) ? data : data?.books || [];

    // ✅ Get IDs from localStorage
    const readIds = getStoredBook("readList");
    const wishIds = getStoredBook("wishList");

    // ✅ Match IDs to full book objects
    const readBooks = safeData.filter(book =>
        readIds.includes(book.bookId || book.id)
    );
    const wishBooks = safeData.filter(book =>
        wishIds.includes(book.bookId || book.id)
    );

    // ✅ Sort function
    const sortBooks = (books) => {
        if (!sortBy) return books;
        return [...books].sort((a, b) => {
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "pages") return b.totalPages - a.totalPages;
            if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
        });
    };

    const activeBooks = sortBooks(activeTab === 'read' ? readBooks : wishBooks);

    // ✅ Reusable Book Card
    const BookCard = ({ book }) => (
        <div className="card lg:card-side bg-base-100 border border-gray-200 p-6 gap-6 shadow-sm rounded-2xl">
            <figure className="bg-gray-100 rounded-2xl p-8 lg:w-60 flex justify-center">
                <img src={book.image} alt={book.bookName} className="h-5/6 shadow-lg rounded-md object-contain" />
            </figure>
            <div className="flex-1 space-y-3">
                <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                <p className="text-gray-600 font-medium text-sm">By : {book.author}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="font-bold">Tag</span>
                    {book.tags?.map((tag, i) => (
                        <span key={i} className="text-[#23BE0A] bg-green-50 px-3 py-1 rounded-full font-medium">
                            #{tag}
                        </span>
                    ))}
                    <div className="flex items-center gap-1 text-gray-500">
                        <IoLocationOutline className="text-lg" />
                        Year of Publishing: {book.yearOfPublishing}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2">
                        <HiOutlineUsers className="text-lg" /> Publisher: {book.publisher}
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineInsertPageBreak className="text-lg" /> Page {book.totalPages}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="bg-blue-100 text-blue-500 px-5 py-2 rounded-full text-sm font-medium">
                        Category: {book.category}
                    </span>
                    <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-medium">
                        Rating: {book.rating}
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-4 lg:p-8">

            {/* Header */}
            <div className="bg-gray-100 rounded-2xl py-8 mb-8">
                <h1 className="text-3xl font-bold text-center">Books</h1>
            </div>

            {/* Sort By */}
            <div className="flex justify-center mb-10">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white px-8 hover:bg-[#1a8e08] border-none">
                        {sortBy === "rating" ? "Rating" : sortBy === "pages" ? "Number of Pages" : sortBy === "year" ? "Publisher Year" : "Sort By"} ▼
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><a onClick={() => setSortBy("rating")}>Rating</a></li>
                        <li><a onClick={() => setSortBy("pages")}>Number of Pages</a></li>
                        <li><a onClick={() => setSortBy("year")}>Publisher Year</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col">
                <div role="tablist" className="tabs tabs-lifted justify-start ml-1">
                    <button
                        role="tab"
                        onClick={() => setActiveTab('read')}
                        className={`tab h-14 text-lg transition-all duration-300 ${activeTab === 'read' ? 'tab-active font-bold' : 'text-gray-400'}`}
                    >
                        Read Books ({readBooks.length})
                    </button>
                    <button
                        role="tab"
                        onClick={() => setActiveTab('wishlist')}
                        className={`tab h-14 text-lg transition-all duration-300 ${activeTab === 'wishlist' ? 'tab-active font-bold' : 'text-gray-400'}`}
                    >
                        Wishlist Books ({wishBooks.length})
                    </button>
                </div>

                {/* Tab Content */}
                <div className="border-t border-base-300 p-6 space-y-6">
                    {activeBooks.length === 0 ? (
                        <div className="py-16 text-center">
                            <p className="text-5xl mb-4">📚</p>
                            <h3 className="text-xl font-medium text-gray-500">
                                {activeTab === 'read' ? "You haven't read any books yet." : "Your wishlist is empty."}
                            </h3>
                        </div>
                    ) : (
                        activeBooks.map((book) => (
                            <BookCard key={book.bookId || book.id} book={book} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;