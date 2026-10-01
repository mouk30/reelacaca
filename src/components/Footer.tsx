import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050608] border-t border-white/[0.08] py-16 text-[#8E9198] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Top Tier: Wordmark & Curatorial Mandate */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif-luxury text-base font-bold text-[#F5F3EE] tracking-widest">
                REEL ARCHIVE
              </span>
              <span className="text-xs text-[#D4AF37]">
                릴게임 디지털 아카이브
              </span>
            </div>
            <p className="text-xs text-[#8E9198] leading-relaxed max-w-lg font-sans">
              2000년대 한국 아케이드 황금기와 규제사, 기계식 릴과 RNG 난수생성 알고리즘을
              객관적인 공학 및 미디어 문화사적 시각에서 기록하고 보존하는 비영리 디지털 연구 플랫폼입니다.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] text-[#D6D4CE] uppercase tracking-wider mb-3">색인 섹션 바로가기</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#basics" className="hover:text-[#F5F3EE] transition-colors">01. 릴게임의 기원과 본질</a></li>
              <li><a href="#game-index" className="hover:text-[#F5F3EE] transition-colors">02. 6대 대표작 아카이브</a></li>
              <li><a href="#rng-lab" className="hover:text-[#F5F3EE] transition-colors">03. RNG 연출 분리 실험실</a></li>
              <li><a href="#comparison" className="hover:text-[#F5F3EE] transition-colors">04. 메커니즘 대조 분석표</a></li>
              <li><a href="#glossary" className="hover:text-[#F5F3EE] transition-colors">05. 릴게임 공학 용어 사전</a></li>
              <li><a href="#faq" className="hover:text-[#F5F3EE] transition-colors">06. 자주 묻는 질문(FAQ)</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] text-[#D6D4CE] uppercase tracking-wider mb-3">공공성 & 법적 안내</div>
            <p className="text-[11px] text-[#8E9198] leading-relaxed font-sans">
              본 사이트는 게임물의 플레이, 베팅, 환전 등의 상업적 또는 사행적 기능을 전혀 포함하지 않습니다. 도박 중독 상담은 한국도박문제예방치유원(국번없이 1336)을 통해 도움받으실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/[0.06]" />

        {/* Bottom Tier: Imprint, Canonical Domain Notice & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
          <div>
            <span>© 2026 REEL GAME ARCHIVE. ALL RIGHTS RESERVED.</span>
            <span className="mx-2 text-white/20">·</span>
            <span className="text-[#8E9198]">CANONICAL: https://reel-archive.example/</span>
          </div>

          <div className="flex items-center gap-4 text-[#8E9198]">
            <a href="#basics" className="hover:text-[#F5F3EE] transition-colors">아카이브 헌장</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#F5F3EE] transition-colors">연구 윤리 기준</a>
            <span>·</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              맨 위로 ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
