// ✅ Get stored books by key
const getStoredBook = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

// ✅ Add to Read List
const addToReadList = (id) => {
    const readList = getStoredBook("readList");
    const wishList = getStoredBook("wishList");

    if (!readList.includes(id)) {
        // ✅ if in wishlist, remove from wishlist first
        if (wishList.includes(id)) {
            const updated = wishList.filter((bookId) => bookId !== id);
            localStorage.setItem("wishList", JSON.stringify(updated));
        }
        readList.push(id);
        localStorage.setItem("readList", JSON.stringify(readList));
    }
};

// ✅ Add to Wishlist
const addToWishList = (id) => {
    const wishList = getStoredBook("wishList");
    const readList = getStoredBook("readList");

    if (!readList.includes(id) && !wishList.includes(id)) {
        wishList.push(id);
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }
};

export { addToReadList, addToWishList, getStoredBook };
