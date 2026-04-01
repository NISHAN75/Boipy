
const Book = ({ book }) => {
    console.log(book);
    
    
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
    <figure className="px-6 pt-6 pb-2">
        <div className="bg-gray-100 rounded-2xl p-4 lg:p-8 flex justify-center items-center w-full aspect-square">
        <img
            src={book.image} 
            alt="Book Cover"
            className="shadow-2xl h-5/6 rotate-3 transition-transform hover:rotate-0"
        />
        </div>
    </figure>
    <div className="card-body px-6 py-4 gap-3">
        <div className="flex gap-2">
        {
            book.tags.map((tag, index) => (
            <div 
                key={index} 
                className="badge badge-success badge-outline bg-green-50 border-none text-green-600 font-medium px-4 py-3"
            >
                {tag}
            </div>
            ))
        }
        </div>
        <div className="mt-2">
        <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {book.bookName}
        </h2>
        <p className="text-gray-500 mt-1 text-sm font-medium">
            By : {book.author}
        </p>
        </div>
        <div className="border-t border-dashed border-gray-300 my-2"></div>

        <div className="flex justify-between items-center text-gray-600 font-semibold">
        <span>{book.category}</span>
        <div className="flex items-center gap-1">
            <span>{book.rating}</span>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        </div>
        </div>

    </div>
    </div>
  );
};

export default Book;