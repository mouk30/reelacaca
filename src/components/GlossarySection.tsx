import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../data/archiveData';

export const GlossarySection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<string | null>('01');

  const toggleItem = (index: string) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="glossary" className="relative w-full py-24 lg:py-32 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-3">
              <span>05</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              <span>TERMINOLOGY ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EE] font-display">
              릴게임 공학 및 용어 사전 8선
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#8E9198] max-w-md font-light">
            단순 카드가 아닌, 매거진 용어 아카이브 형식으로 기계적 드럼에서 알고리즘까지 핵심 개념을 해설합니다.
          </p>
        </div>

        {/* Magazine Glossary List (Long list style with hairline dividers) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {GLOSSARY_ITEMS.map((item) => {
            const isExpanded = expandedIndex === item.index;

            return (
              <div
                key={item.index}
                className="py-6 sm:py-8 transition-colors duration-200 hover:bg-[#111318]/50 px-2 sm:px-4"
              >
                {/* Master Clickable Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8 flex-1">
                    {/* Index Number */}
                    <span className="text-sm font-mono text-[#D4AF37] tabular-nums shrink-0">
                      {item.index}
                    </span>

                    {/* Term & English Lockup */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-xl sm:text-2xl font-bold text-[#F5F3EE] group-hover:text-[#D4AF37] transition-colors font-display">
                        {item.term}
                      </span>
                      <span className="text-xs font-mono text-[#8E9198]">
                        {item.englishTerm}
                      </span>
                    </div>

                    {/* Category */}
                    <span className="hidden md:inline-block ml-auto text-xs font-mono text-[#8E9198] mr-6">
                      [{item.category}]
                    </span>
                  </div>

                  {/* Minimal Expand Toggle Icon */}
                  <div className="text-xs font-mono text-[#D4AF37] shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                    {isExpanded ? '[- 해설 접기]' : '[+ 구조 해설]'}
                  </div>
                </button>

                {/* Short Overview Line */}
                <div className="mt-2 pl-8 sm:pl-12 text-sm text-[#8E9198] font-light">
                  {item.shortDesc}
                </div>

                {/* Expanded Deep-Dive Reading Block */}
                {isExpanded && (
                  <div className="mt-6 ml-8 sm:ml-12 p-6 border-l-2 border-[#D4AF37] bg-white/[0.02] text-sm text-[#D6D4CE] leading-relaxed animate-in fade-in duration-200">
                    <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                      [ ARCHITECTURAL ANALYSIS ]
                    </div>
                    <p className="font-light">
                      {item.deepDive}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
