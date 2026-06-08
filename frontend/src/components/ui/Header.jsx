export default function Header({ apiStatus }) {
    return (
        <header className="border-b border-slate-900/80 backdrop-blur sticky top-0 z-40 bg-slate-950/80">
            <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🎬</span>
                    <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">CineWave</h1>
                </div>
                
                <div className="text-xs text-slate-400 font-mono">{apiStatus}</div>
            </div>
        </header>
    );
}