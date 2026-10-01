import React, { useState } from 'react';
import { ARCHIVE_GAMES } from '../data/archiveData';

export const ComparisonSection: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState<'all' | 'video' | 'classic'>('all');

  const filteredGames = ARCHIVE_GAMES.filter((g) => {
    if (filterQuery === 'video') return g.reels.includes('5');
    if (filterQuery === 'classic') return g.reels.includes('3');
    return true;
  });

  return (
    <section id="comparison" className="relative w-full py-24 lg:py-32 bg-[#08090B] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-3">
              <span>04</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              <span>COMPARATIVE MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EE] font-display">
              구조 및 메커니즘 대조 분석
            </h2>
          </div>

          {/* Interactive Filter Tabs (Zero-pill discipline, functional buttons) */}
          <div className="mt-6 md:mt-0 flex items-center border border-white/10 p-1 bg-[#111318] text-xs font-mono">
            <button
              type="button"
              onClick={() => setFilterQuery('all')}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                filterQuery === 'all' ? 'bg-[#D4AF37] text-[#08090B] font-semibold' : 'text-[#8E9198] hover:text-[#F5F3EE]'
              }`}
            >
              전체 6작
            </button>
            <button
              type="button"
              onClick={() => setFilterQuery('video')}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                filterQuery === 'video' ? 'bg-[#D4AF37] text-[#08090B] font-semibold' : 'text-[#8E9198] hover:text-[#F5F3EE]'
              }`}
            >
              5릴 비디오 계열
            </button>
            <button
              type="button"
              onClick={() => setFilterQuery('classic')}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                filterQuery === 'classic' ? 'bg-[#D4AF37] text-[#08090B] font-semibold' : 'text-[#8E9198] hover:text-[#F5F3EE]'
              }`}
            >
              3릴 클래식/하이브리드
            </button>
          </div>
        </div>

        {/* Editorial Data Table Container with Horizontal Scroll for Mobile */}
        <div className="w-full overflow-x-auto border border-white/[0.08] bg-[#0E1015]">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#111318] text-[11px] font-mono tracking-wider text-[#8E9198] uppercase">
                <th className="py-4 px-6 font-medium">INDEX / 게임명</th>
                <th className="py-4 px-6 font-medium">연도 & 플랫폼</th>
                <th className="py-4 px-6 font-medium">릴 & 페이라인</th>
                <th className="py-4 px-6 font-medium">시그니처 연출</th>
                <th className="py-4 px-6 font-medium">당첨/보너스 메커니즘</th>
                <th className="py-4 px-6 font-medium">핵심 심리 기믹</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-xs">
              {filteredGames.map((game) => (
                <tr
                  key={game.id}
                  className="hover:bg-white/[0.03] transition-colors group"
                >
                  {/* Game Name */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[#D4AF37] text-xs tabular-nums">
                        {game.index}
                      </span>
                      <div>
                        <span className="font-bold text-[#F5F3EE] text-sm group-hover:text-[#D4AF37] transition-colors">
                          {game.name}
                        </span>
                        <span className="block text-[11px] font-mono text-[#8E9198]">
                          {game.englishName}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Era & Platform */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <span className="text-[#D6D4CE] block font-mono">{game.year}</span>
                    <span className="text-[11px] text-[#8E9198]">{game.platform.split('(')[0]}</span>
                  </td>

                  {/* Reels & Paylines */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <span className="text-[#F5F3EE] font-mono font-medium block">{game.reels}</span>
                    <span className="text-[11px] text-[#8E9198] font-mono">{game.paylines}</span>
                  </td>

                  {/* Signature Feature */}
                  <td className="py-5 px-6 max-w-xs text-[#D6D4CE] leading-relaxed">
                    {game.signatureFeature}
                  </td>

                  {/* Bonus Mechanism */}
                  <td className="py-5 px-6 max-w-xs text-[#8E9198] leading-relaxed">
                    {game.bonusMechanism}
                  </td>

                  {/* Psychological Gimmick */}
                  <td className="py-5 px-6 max-w-xs text-[#D6D4CE] leading-relaxed">
                    <span className="text-amber-400/90">{game.psychologicalGimmick}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note on table */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#8E9198]">
          <span>* 좌우로 스크롤하여 모든 속성을 비교할 수 있습니다.</span>
          <span>SOURCE: 2002–2006 KOREAN ARCADE BOARD REVIEWS & HARDWARE SPECIFICATIONS</span>
        </div>
      </div>
    </section>
  );
};
