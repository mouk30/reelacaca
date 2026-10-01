import React, { useState } from 'react';
import { ARCHIVE_GAMES, GameItem } from '../data/archiveData';

export const GameIndexSection: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Custom bespoke SVG graphics for each game
  const renderGameVisual = (id: string) => {
    switch (id) {
      case 'sea-story':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#06121e] to-[#04080e] flex items-center justify-center p-6 border border-cyan-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <path d="M20 70 Q60 30 110 50 T180 60 Q140 90 90 85 T20 70Z" fill="url(#whaleGrad)" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="160" cy="55" r="2" fill="#F5F3EE" />
              <path d="M110 50 Q120 20 135 15 Q125 40 120 52" stroke="#D4AF37" strokeWidth="1.5" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#00ffff" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
              <defs>
                <linearGradient id="whaleGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#164e63" />
                  <stop offset="100%" stopColor="#082f49" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      case 'yamato':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#180a0a] to-[#0a0505] flex items-center justify-center p-6 border border-red-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <circle cx="100" cy="60" r="45" stroke="#ef4444" strokeWidth="0.75" strokeDasharray="3 3" />
              <circle cx="100" cy="60" r="25" stroke="#D4AF37" strokeWidth="1" />
              <line x1="100" y1="5" x2="100" y2="115" stroke="#ef4444" strokeWidth="0.5" />
              <line x1="45" y1="60" x2="155" y2="60" stroke="#ef4444" strokeWidth="0.5" />
              <path d="M30 60 L100 50 L170 60 L100 70 Z" fill="#7f1d1d" stroke="#D4AF37" strokeWidth="1" />
            </svg>
          </div>
        );
      case 'son-goku':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#1c1404] to-[#0a0702] flex items-center justify-center p-6 border border-amber-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <line x1="30" y1="100" x2="170" y2="20" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              <line x1="30" y1="100" x2="45" y2="90" stroke="#D4AF37" strokeWidth="7" />
              <line x1="155" y1="30" x2="170" y2="20" stroke="#D4AF37" strokeWidth="7" />
              <path d="M50 70 Q70 50 100 65 T150 60 Q130 90 90 85 Z" fill="#d97706" opacity="0.3" />
            </svg>
          </div>
        );
      case 'golden-castle':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#171408] to-[#0a0803] flex items-center justify-center p-6 border border-yellow-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <rect x="60" y="30" width="80" height="70" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M60 30 L100 10 L140 30" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M85 100 L85 65 Q100 50 115 65 L115 100" stroke="#F5F3EE" strokeWidth="1" fill="#78350f" fillOpacity="0.5" />
              <circle cx="100" cy="75" r="3" fill="#D4AF37" />
            </svg>
          </div>
        );
      case 'ocean-paradise':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#04131a] to-[#020a0e] flex items-center justify-center p-6 border border-teal-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <ellipse cx="100" cy="60" rx="60" ry="25" stroke="#14b8a6" strokeWidth="1.2" fill="#042f2e" />
              <circle cx="75" cy="60" r="6" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="100" cy="60" r="6" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="125" cy="60" r="6" stroke="#D4AF37" strokeWidth="1" />
              <path d="M160 50 L180 40 L180 80 L160 70 Z" fill="#0f766e" />
            </svg>
          </div>
        );
      case 'aladdin':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#140b1c] to-[#09040e] flex items-center justify-center p-6 border border-purple-500/20">
            <svg viewBox="0 0 200 120" className="w-full h-full opacity-80" fill="none">
              <path d="M50 70 Q70 85 110 85 Q140 85 160 65 L170 55 Q145 60 120 60 Q100 50 80 50 Q60 50 50 70 Z" fill="#581c87" stroke="#D4AF37" strokeWidth="1.2" />
              <circle cx="100" cy="45" r="5" fill="#D4AF37" />
              <path d="M170 55 Q190 35 180 20 Q165 30 160 45" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="game-index" className="relative w-full py-24 lg:py-32 bg-[#08090B] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-3">
              <span>01</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              <span>EDITORIAL INDEX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F3EE] font-display">
              한국 아케이드 6대 대표작
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#8E9198] max-w-md font-light">
            단순 카드 나열이 아닌, 2000년대 시대를 풍미한 6개 타이틀의 메커니즘과 연출 심리학을 에디토리얼 색인 방식으로 해체합니다.
          </p>
        </div>

        {/* Editorial Index Rows (Not generic cards!) */}
        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {ARCHIVE_GAMES.map((game) => (
            <div
              key={game.id}
              onMouseEnter={() => setHoveredId(game.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedGame(game)}
              className="group relative py-8 lg:py-10 transition-colors duration-300 hover:bg-[#0E1015] cursor-pointer px-4 -mx-4 rounded-sm"
            >
              {/* Gold Accent Left Line Indicator on Hover */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4AF37] transition-all duration-300 ${
                  hoveredId === game.id ? 'opacity-100 h-full' : 'opacity-0 h-0'
                }`} 
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Index Number (Col 1) */}
                <div className="lg:col-span-1">
                  <span className="text-2xl sm:text-3xl font-mono text-[#8E9198] group-hover:text-[#D4AF37] transition-colors tabular-nums">
                    {game.index}
                  </span>
                </div>

                {/* Title & English Subtitle (Col 2 to 5) */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3EE] group-hover:translate-x-2 transition-transform duration-300 font-display">
                      {game.name}
                    </h3>
                    <span className="text-xs font-mono text-[#8E9198] tracking-wider uppercase">
                      {game.englishName}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-[#8E9198]">
                    <span>{game.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{game.reels}</span>
                    <span aria-hidden="true">·</span>
                    <span>{game.paylines}</span>
                  </div>
                </div>

                {/* Signature Feature & Gimmick (Col 6 to 9) */}
                <div className="lg:col-span-4 text-sm text-[#D6D4CE]">
                  <p className="line-clamp-2 font-light">
                    {game.signatureFeature}
                  </p>
                  <p className="mt-1 text-xs text-[#8E9198] line-clamp-1">
                    심리 기믹: {game.psychologicalGimmick}
                  </p>
                </div>

                {/* Prominent Site Link Button (Gold Background, Crisp White Text, Direct Link to https://xoreel.net) */}
                <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
                  <a
                    href="https://xoreel.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C99E2E] to-[#B38722] hover:from-[#E2BE4A] hover:via-[#D4AF37] hover:to-[#C99E2E] text-white font-black text-base sm:text-lg lg:text-xl tracking-tight rounded-md border border-[#F6E27A]/50 shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-[1.03] active:scale-95 whitespace-nowrap text-center"
                  >
                    사이트바로가기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Inspection Modal / Drawer */}
      {selectedGame && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedGame(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E1015] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-10 shadow-2xl text-[#F5F3EE]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedGame(null)}
              className="absolute top-6 right-6 text-[#8E9198] hover:text-[#F5F3EE] p-2 focus:outline-none"
              aria-label="닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/[0.08] pb-6 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-2">
                <span>ARCHIVAL DOSSIER {selectedGame.index}</span>
                <span aria-hidden="true">/</span>
                <span>{selectedGame.year}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3EE] font-display">
                {selectedGame.name} <span className="text-xl font-normal text-[#8E9198] ml-2">({selectedGame.englishName})</span>
              </h3>
              <p className="mt-2 text-xs font-mono text-[#8E9198]">
                플랫폼: {selectedGame.platform} · {selectedGame.reels} · {selectedGame.paylines}
              </p>
            </div>

            {/* Modal Body: Two-Column Deep Architectural Anatomy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Visual Asset & Feature breakdown */}
              <div className="space-y-6">
                <div className="w-full h-44 rounded-sm overflow-hidden border border-white/10">
                  {renderGameVisual(selectedGame.id)}
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mb-2">[ 시그니처 연출 및 보너스 ]</h4>
                  <p className="text-sm text-[#D6D4CE] leading-relaxed">
                    {selectedGame.signatureFeature}
                  </p>
                  <p className="mt-2 text-xs text-[#8E9198] leading-relaxed">
                    메커니즘: {selectedGame.bonusMechanism}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mb-2">[ 상징적 심볼 군집 ]</h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#D6D4CE]">
                    {selectedGame.symbolList.map((sym, idx) => (
                      <span key={idx} className="border border-white/10 px-2.5 py-1 bg-white/[0.02]">
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Psychological Gimmick vs Mathematical Reality */}
              <div className="space-y-6">
                <div className="border border-amber-500/20 bg-amber-500/[0.03] p-5 rounded-sm">
                  <h4 className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
                    [ 심리학적 기믹 & 인지 편향 ]
                  </h4>
                  <p className="text-sm text-[#D6D4CE] leading-relaxed">
                    {selectedGame.psychologicalGimmick}
                  </p>
                </div>

                <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] p-5 rounded-sm">
                  <h4 className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mb-2">
                    [ 수학적 실체 (RNG 독립 시행) ]
                  </h4>
                  <p className="text-sm text-[#F5F3EE] leading-relaxed">
                    {selectedGame.mathematicalReality}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#8E9198] tracking-wider uppercase mb-2">[ 역사적 파장과 배경 ]</h4>
                  <p className="text-xs text-[#8E9198] leading-relaxed">
                    {selectedGame.historicalContext}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer: Curatorial Quote & Site Button */}
            <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs italic font-serif text-[#D4AF37] max-w-xl">
                “{selectedGame.accentQuote}”
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://xoreel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 bg-gradient-to-r from-[#D4AF37] via-[#C99E2E] to-[#B38722] hover:from-[#E2BE4A] hover:via-[#D4AF37] hover:to-[#C99E2E] text-white font-black text-base sm:text-lg rounded-md border border-[#F6E27A]/50 shadow-md shadow-[#D4AF37]/30 transition-all cursor-pointer whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] inline-flex items-center justify-center text-center"
                >
                  사이트바로가기
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedGame(null)}
                  className="px-4 py-3 border border-white/20 text-xs font-mono text-[#F5F3EE] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  닫기 (ESC)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
