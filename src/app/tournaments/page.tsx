import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function TournamentsPage() {
  return (
    <main className="flex min-h-screen flex-col p-8 bg-obsidian text-white font-sans max-w-7xl mx-auto">
      <Breadcrumbs />
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-12 group">
        <div className="absolute inset-0 bg-gradient-to-r from-cobalt-electric to-obsidian opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute inset-0 flex items-center px-12">
           <h1 className="text-5xl font-bold tracking-tighter text-white z-10">Tournaments</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Placeholder for Tournament List */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-lime-cyber/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-lime-cyber px-2 py-1 rounded-full border border-lime-cyber/30">LIVE</span>
                <span className="text-sm text-neutral-400">March 12th, 2026</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Valorant: Kinshasa Majors</h2>
            <p className="text-neutral-400 text-sm mb-4">The biggest regional showdown. Prize pool: $5,000 USD.</p>
            <button className="w-full py-2 bg-cobalt-electric hover:bg-cobalt-electric/80 text-white rounded-lg font-bold transition-colors">
                View Brackets
            </button>
        </div>

         <div className="p-6 rounded-xl border border-white/10 bg-white/5 opacity-50">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-neutral-500 px-2 py-1 rounded-full border border-neutral-500/30">COMPLETED</span>
                <span className="text-sm text-neutral-400">Feb 10th, 2026</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">FIFA 26: City League</h2>
            <p className="text-neutral-400 text-sm mb-4">Champion: ELIKIA_PRO. Watch the replays.</p>
            <button className="w-full py-2 bg-neutral-800 text-neutral-400 rounded-lg font-bold cursor-not-allowed">
                Results
            </button>
        </div>
      </div>
    </main>
  );
}
