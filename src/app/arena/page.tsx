import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function ArenaPage() {
  return (
    <main className="flex min-h-screen flex-col p-8 bg-obsidian text-white font-sans max-w-7xl mx-auto">
      <Breadcrumbs />
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-12 group">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-cyber/20 to-obsidian opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute inset-0 flex items-center px-12">
           <h1 className="text-5xl font-bold tracking-tighter text-white z-10">The Arena</h1>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 row-span-2 bg-neutral-900 rounded-xl min-h-[400px] flex items-center justify-center border border-white/5 relative overflow-hidden">
             <div className="text-center p-8">
                 <div className="text-6xl mb-4 opacity-20">3D</div>
                 <h3 className="text-xl font-bold text-neutral-300">Space Twin Loading...</h3>
                 <p className="text-sm text-neutral-500 mt-2">Interactive WebGL walk-through coming soon.</p>
             </div>
             {/* Abstract grid lines */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-cobalt-electric mb-2">Pro-Tier Specs</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex justify-between">
                      <span>GPU</span>
                      <span className="text-white">RTX 5090</span>
                  </li>
                  <li className="flex justify-between">
                      <span>CPU</span>
                      <span className="text-white">i9-14900K</span>
                  </li>
                   <li className="flex justify-between">
                      <span>RAM</span>
                      <span className="text-white">64GB DDR5</span>
                  </li>
              </ul>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-lime-cyber mb-2">Connectivity</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                  Dual-redundant fiber lines with local caching server (Lancache) for <span className="text-white font-bold">0ms latency</span> on LAN.
              </p>
          </div>
       </div>
    </main>
  );
}
