import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { HeroShader } from "@/components/visuals/HeroShader";
import { MoveRight } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      title: "KIN-NEXUS: ONLINE",
      path: "/arena",
      description: "24/7 Access. The Void is Open.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 relative overflow-hidden group/hero">
             <Image 
               src="kin-nexus/images/gaming-room.png" 
               alt="Gaming Room" 
               fill 
               className="object-cover opacity-60 transition-transform duration-500 group-hover/hero:scale-105"
             />
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter opacity-80 group-hover/hero:opacity-100 transition-opacity">KIN-NEXUS</span>
                <span className="text-xs text-lime-cyber font-mono mt-2">SYSTEM.READY</span>
             </div>
        </div>
      ),
      className: "md:col-span-2 md:row-span-2 min-h-[20rem]",
      icon: <div className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Upcoming Tournaments",
      path: "/tournaments",
      description: "Valorant: Kinshasa Majors - 03/12",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 relative overflow-hidden">
             <Image 
               src="kin-nexus/images/roller.png" 
               alt="Upcoming Tournaments" 
               fill 
               className="object-cover opacity-60 transition-transform duration-500 hover:scale-105"
             />
        </div>
      ),
      className: "md:col-span-1",
      icon: <div className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Arena",
      path: "/arena",
      description: "Explore the 3D Venue Twin",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 relative overflow-hidden">
             <Image 
               src="kin-nexus/images/arena.jpeg" 
               alt="The Arena" 
               fill 
               className="object-cover opacity-60 transition-transform duration-500 hover:scale-105"
             />
        </div>
      ),
      className: "md:col-span-1",
      icon: <div className="h-4 w-4 text-neutral-500" />,
    },
     {
      title: "Membership",
      path: "/membership",
      description: "Join the Corps.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 relative overflow-hidden">
             <Image 
               src="kin-nexus/images/corp.png" 
               alt="Join the Corps" 
               fill 
               className="object-cover opacity-60 transition-transform duration-500 hover:scale-105"
             />
        </div>
      ),
      className: "md:col-span-1",
      icon: <MoveRight className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-obsidian text-white relative overflow-hidden font-sans">
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm flex mb-8">
          <div className="text-xs text-lime-cyber animate-pulse border border-lime-cyber/30 px-2 py-1 rounded-full">SYSTEM: OPTIMAL</div>
      </div>

      <BentoGrid className="max-w-4xl mx-auto z-10 w-full mb-16">
        {items.map((item, i) => (
          <Link href={item.path} key={i} className={item.className}>
             <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full"
            />
          </Link>
        ))}
      </BentoGrid>
      
       <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cobalt-electric blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-lime-cyber blur-[120px]" />
       </div>
    </main>
  );
}
