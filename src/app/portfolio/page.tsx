"use client";
import { useState } from "react";
import Cards from "@/components/cards/cards";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Exterior', value: 'exterior' },
    { label: 'Interior', value: 'interior' },
  ];

  return (
    <div className="pt-32 px-2 md:px-40">
      <div className="text-center py-7 md:py-14 space-y-5">
        <p className="text-4xl md:text-6xl tracking-widest">Arki Masterpiece</p>
        <p className="text-base md:text-2xl text-slate-600">These are the showcase from our best works</p>
      </div>
      
      <div className="text-center py-7 md:py-14 space-y-5">
        <div className="flex justify-center gap-4 uppercase tracking-widest text-slate-600 font-extralight">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`rounded font-medium uppercase text-xs ${activeFilter === filter.value ? ' text-amber-600' : ' text-slate-500'}`}
              onClick={() => setActiveFilter(filter.value)}
            > 
              {filter.label}
            </button>
          ))}
        </div>
        <Cards activeFilter={activeFilter} />
      </div>
    </div>
  );
}