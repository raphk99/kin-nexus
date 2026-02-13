import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Check } from "lucide-react";

export default function MembershipPage() {
  return (
    <main className="flex min-h-screen flex-col p-8 bg-obsidian text-white font-sans max-w-7xl mx-auto">
      <Breadcrumbs />
       <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-12 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-obsidian opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute inset-0 flex items-center px-12">
           <h1 className="text-5xl font-bold tracking-tighter text-white z-10">Membership</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold text-neutral-300 mb-2">Day Pass</h3>
            <div className="text-3xl font-bold text-white mb-6">$10 <span className="text-sm text-neutral-500 font-normal">/ day</span></div>
            <ul className="space-y-4 mb-8 flex-1">
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-lime-cyber" /> Access to Standard Rig
                 </li>
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-lime-cyber" /> 2 Hours of Playtime
                 </li>
            </ul>
             <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors">
                Select
            </button>
        </div>

         {/* Tier 2 - Featured */}
        <div className="rounded-2xl border-2 border-cobalt-electric bg-obsidian p-8 flex flex-col relative scale-105 shadow-[0_0_30px_rgba(0,71,171,0.3)]">
            <div className="absolute top-0 right-0 bg-cobalt-electric text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Corps</h3>
            <div className="text-3xl font-bold text-cobalt-electric mb-6">$50 <span className="text-sm text-neutral-500 font-normal">/ mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
                 <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="w-4 h-4 text-cobalt-electric" /> Unlimited Access
                 </li>
                 <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="w-4 h-4 text-cobalt-electric" /> RTX 4090 Station Priority
                 </li>
                 <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="w-4 h-4 text-cobalt-electric" /> Locker Access
                 </li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-cobalt-electric hover:bg-cobalt-electric/80 text-white font-bold transition-colors shadow-lg shadow-cobalt-electric/25">
                Join the Corps
            </button>
        </div>

         {/* Tier 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col hover:border-lime-cyber/30 transition-all">
            <h3 className="text-xl font-bold text-lime-cyber mb-2">Elite</h3>
            <div className="text-3xl font-bold text-white mb-6">$120 <span className="text-sm text-neutral-500 font-normal">/ mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-lime-cyber" /> 24/7 Biometric Access
                 </li>
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-lime-cyber" /> Private Room Booking
                 </li>
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-lime-cyber" /> Mentorship Sessions
                 </li>
            </ul>
             <button className="w-full py-3 rounded-xl bg-gradient-to-r from-lime-cyber to-emerald-500 text-black font-bold hover:opacity-90 transition-opacity">
                Apply for Elite
            </button>
        </div>
      </div>
    </main>
  );
}
