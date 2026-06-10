export default function SearchControls({ search, setSearch, selectedType, setSelectedType, onSearch }) {
    return (
        <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80 max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search movies or anime..."
                    className="w-full pl-4 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition text-sm text-white"
                />
            </div>


            <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm text-white cursor-pointer"
            >
                <option value="">All Formats</option>
                <option value="movie">Movies 🎥</option>
                <option value="anime">Anime 🌌</option>
            </select>


            <button
                onClick={onSearch}
                className="bg-rose-600 hover:bg-rose-700 active:scale-95 transition text-white px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap"
            >
                Search Now
            </button>
        </div>
    )
}