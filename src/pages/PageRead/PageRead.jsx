import { useOutletContext } from "react-router";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { getStoredBook } from "../../components/Utility/addToDB";

const COLORS = [
    { stroke: "#4A90D9", fill: "#4A90D9" },
    { stroke: "#00BFA5", fill: "#00BFA5" },
    { stroke: "#F5A623", fill: "#F5A623" },
    { stroke: "#FF7043", fill: "#FF7043" },
    { stroke: "#E53935", fill: "#E53935" },
    { stroke: "#8E24AA", fill: "#8E24AA" },
];

const PageRead = () => {
    const data = useOutletContext();

    const safeData = Array.isArray(data) ? data : data?.books || [];

    const readIds = getStoredBook("readList");
    const wishIds = getStoredBook("wishList");
    const allIds = [...new Set([...readIds, ...wishIds])];

    const books = safeData.filter((book) =>
        allIds.includes(book.bookId || book.id)
    );

    if (books.length === 0) {
        return (
            <div className="container mx-auto p-8 text-center py-24">
                <p className="text-5xl mb-4">📊</p>
                <h3 className="text-xl font-medium text-gray-500">
                    No books to show. Mark some books as Read or add to Wishlist first.
                </h3>
            </div>
        );
    }

    // ✅ Build individual spike data for each book
    // Each book gets its own mini area chart with spike shape
    const maxPages = Math.max(...books.map((b) => b.totalPages));

    // ✅ Generate spike shape points for each book
    const buildSpikeData = (pages) => [
        { x: 0, y: 0 },
        { x: 0.15, y: pages * 0.3 },
        { x: 0.3, y: pages * 0.7 },
        { x: 0.4, y: pages * 0.95 },
        { x: 0.5, y: pages },
        { x: 0.6, y: pages * 0.95 },
        { x: 0.7, y: pages * 0.7 },
        { x: 0.85, y: pages * 0.3 },
        { x: 1, y: 0 },
    ];

    return (
        <div className="container mx-auto p-4 lg:p-8">

            {/* Header */}
            <div className="bg-gray-100 rounded-2xl py-8 mb-10">
                <h1 className="text-3xl font-bold text-center">Pages to Read</h1>
            </div>

            {/* Chart Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">
                    Books vs Number of Pages
                </h2>

                <div className="flex items-end justify-around gap-4 px-8"
                    style={{ height: "420px", borderLeft: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", position: "relative" }}
                >
                    {/* Y axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -translate-x-8">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>{Math.round(maxPages - (maxPages / 4) * i)}</span>
                        ))}
                        <span>00</span>
                    </div>

                    {/* Spikes */}
                    {books.map((book, i) => {
                        const color = COLORS[i % COLORS.length];
                        const spikeData = buildSpikeData(book.totalPages);
                        const heightPercent = (book.totalPages / maxPages) * 100;

                        return (
                            <div key={book.bookId || book.id} className="flex flex-col items-center flex-1">
                                {/* Page count label */}
                                <span
                                    className="text-sm font-bold mb-1"
                                    style={{ color: color.stroke }}
                                >
                                    {book.totalPages}
                                </span>

                                {/* Spike chart */}
                                <div style={{ width: "100%", height: "360px" }}>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            data={spikeData}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id={`gradient-${i}`}
                                                    x1="0" y1="0" x2="0" y2="1"
                                                >
                                                    <stop offset="0%" stopColor={color.fill} stopOpacity={1} />
                                                    <stop offset="100%" stopColor={color.fill} stopOpacity={0.6} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="x" hide />
                                            <YAxis domain={[0, maxPages]} hide />
                                            <Tooltip
                                                content={() => (
                                                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm shadow">
                                                        <p className="font-bold" style={{ color: color.stroke }}>{book.bookName}</p>
                                                        <p className="text-gray-500">{book.totalPages} pages</p>
                                                    </div>
                                                )}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="y"
                                                stroke={color.stroke}
                                                strokeWidth={1.5}
                                                fill={`url(#gradient-${i})`}
                                                isAnimationActive={true}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Book name */}
                                <p className="text-xs text-gray-600 text-center mt-1 font-medium">
                                    {book.bookName}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PageRead;