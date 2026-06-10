export default function WatchlistQuickAccess({ watchlist, onToggle }) {
    if (watchlist.length === 0) return null

    return (
        <div className="mb-10 p-6 bg-rose-950/20 rounded-2xl border border-rose-500/20 max-w-6xl mx-auto">
            <h3 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2">
                <span>📌</span> My Watchlist ({watchlist.length})
            </h3>


            <div className="flex flex-wrap gap-3">
                {watchlist.map(item => (
                    <div key={item.id} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                        <span>{item.image}</span>
                        <span className="font-semibold text-slate-200">{item.title}</span>
                        <button onClick={() => onToggle(item)} className="text-rose-500 hover:text-rose-400 font-bold ml-1">×</button>
                    </div>
                ))}
            </div>
        </div>
    )
}