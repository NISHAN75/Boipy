import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router';

const BookDetails = () => {

    const data = useOutletContext();
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    const safeData = Array.isArray(data) ? data : data?.books || [];

    const book = safeData.find(
        (item) => String(item.bookId || item.id) === id
    );
    console.log(book);
    

    if (!book) {
        return <p className="text-center py-10">Book not found</p>;
    }

    return (
        <div className="container mx-auto p-6 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div className="bg-gray-100 rounded-3xl p-12 flex justify-center items-center shadow-inner h-full">
                    <img 
                        src={book.image} 
                        alt={book.bookName} 
                        className="rounded-lg shadow-2xl max-h-[500px] object-contain"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">{book.bookName}</h1>
                    <p className="text-xl font-medium text-gray-600">By : {book.author}</p>
                    
                    <div className="border-y border-gray-200 py-3">
                        <span className="text-lg font-medium text-gray-700">{book.category}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        <span className="font-bold text-gray-900">Review : </span>
                        {book.review}
                    </p>

                    <div className="flex items-center gap-4 py-2">
                        <span className="font-bold text-gray-900">Tag</span>
                        <div className="flex gap-2">
                            {book.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="text-green-500 bg-green-50 px-4 py-1 rounded-full font-medium"
                                >
                                #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4"></div>

                    <div className="space-y-3 max-w-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Number of Pages:</span>
                            <span className="font-bold text-gray-900">{book.totalPages}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Publisher:</span>
                            <span className="font-bold text-gray-900">{book.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Year of Publishing:</span>
                            <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold text-gray-900">{book.rating}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                        <button className="btn btn-outline border-gray-300 px-8 rounded-lg hover:bg-gray-100 hover:text-black">
                            Read
                        </button>
                        <button className="btn bg-[#50B1C9] border-none text-white px-8 rounded-lg hover:bg-[#3e8ca0]">
                            Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;