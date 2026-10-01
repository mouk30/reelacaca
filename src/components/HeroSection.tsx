import React, { useState, useEffect } from 'react';

export const HeroSection: React.FC = () => {
  const [ambientSpin, setAmbientSpin] = useState(true);
  const [rotationOffset, setRotationOffset] = useState(0);

  useEffect(() => {
    if (!ambientSpin) return;
    const interval = setInterval(() => {
      setRotationOffset((prev) => (prev + 0.35) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [ambientSpin]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] w-full overflow-hidden bg-[#08090B] flex flex-col justify-between border-b border-white/[0.08] grain-overlay">
      {/* Editorial Ambient Light Cone */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent blur-3xl opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-950/20 via-transparent to-transparent blur-3xl opacity-50"
      />

      {/* Subtle Editorial Grid Lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-6 lg:grid-cols-12 max-w-7xl mx-auto px-6 lg:px-12 border-x border-white/[0.03]">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.02] h-full" />
        ))}
      </div>

      {/* TOP: Small Brand & Curatorial Metadata Strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8E9198]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="tracking-widest uppercase text-[#D6D4CE]">2026 DIGITAL EDITORIAL MONOGRAPH</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>CURATORIAL ARCHIVE VOL. 01</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#8E9198]">
          <span>RNG DECOUPLING ESSAY</span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>KOREAN ARCADE HISTORY (2002–2006)</span>
        </div>
      </div>

      {/* CENTER & BG: The Monumental 3D REEL Visual & Massive Typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Monumental Headline & Core Theses (Col 1 to 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] tracking-wider uppercase">
            <span>[ SYSTEMATIC DECONSTRUCTION ]</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-bold leading-[1.04] tracking-tight text-[#F5F3EE] mb-6 font-display" style={{ textWrap: 'balance' }}>
            릴게임을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3EE] via-[#E2C974] to-[#D4AF37]">
              다르게 읽다.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#D6D4CE] leading-relaxed max-w-2xl font-light mb-8">
            바다이야기에서 알라딘까지, 한국 아케이드 황금기와 격동의 규제사를 관통한
            기계식 릴의 진화와 난수생성기(RNG). 화려한 연출이라는 연극의 막을 걷어내고
            그 이면에 숨겨진 엄격한 수학적 확률과 기계 공학적 메커니즘을 마주합니다.
          </p>

          {/* CTA & Anchor Controls */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#game-index"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F5F3EE] text-[#08090B] font-medium text-xs tracking-wider uppercase rounded-sm hover:bg-[#D4AF37] transition-colors duration-200"
            >
              <span>6대 대표작 아카이브 열람</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#rng-lab"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-[#D6D4CE] hover:text-[#F5F3EE] hover:border-[#D4AF37]/50 font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-200"
            >
              <span>난수 생성(RNG) 해체 실험</span>
            </a>
          </div>

          {/* Micro Stats Strip */}
          <div className="mt-12 pt-6 border-t border-white/[0.08] flex items-center gap-8 text-xs font-mono text-[#8E9198]">
            <div>
              <span className="block text-white font-semibold text-sm tabular-nums">06</span>
              <span className="text-[11px] text-[#8E9198]">공식 아카이브 타이틀</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-white font-semibold text-sm tabular-nums">1/1,000s</span>
              <span className="text-[11px] text-[#8E9198]">RNG 결과 확정 속도</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-white font-semibold text-sm tabular-nums">100%</span>
              <span className="text-[11px] text-[#8E9198]">수학적 독립 시행 분석</span>
            </div>
          </div>
        </div>

        {/* Right Column: Monumental 3D Editorial REEL Graphic (Col 8 to 12) */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6 lg:py-0">
          {/* Subtle Ambient Outer Ring */}
          <div className="relative w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
            {/* The Monumental REEL Apparatus SVG */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              {/* Mechanical Housing Frame */}
              <div className="relative w-full h-full rounded-sm border border-white/10 bg-gradient-to-b from-[#111318]/90 via-[#0A0B0E]/95 to-[#08090B] p-6 shadow-2xl backdrop-blur-sm flex flex-col justify-between overflow-hidden">
                {/* Visual Glass Sheen */}
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" 
                />

                {/* Apparatus Top Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] pb-3 text-[10px] font-mono tracking-widest text-[#8E9198]">
                  <span>APPARATUS MOD. REEL-06</span>
                  <span className="text-[#D4AF37]">[RNG HARNESS ACTIVE]</span>
                </div>

                {/* The 3-Reel Cylinder Interactive Visual */}
                <div className="relative my-4 flex-1 flex items-center justify-center gap-2 sm:gap-3 perspective-1000">
                  {/* Reel Drum 1 */}
                  <div className="relative flex-1 h-[240px] sm:h-[270px] bg-gradient-to-b from-stone-900 via-neutral-900 to-stone-950 rounded-sm border border-[#D4AF37]/30 overflow-hidden shadow-inner flex flex-col items-center justify-center">
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-14 border-y border-[#D4AF37]/60 bg-[#D4AF37]/5 z-10 pointer-events-none" />
                    
                    {/* Animated Symbol Strip */}
                    <div 
                      className="flex flex-col items-center gap-6 transition-transform duration-75 text-center"
                      style={{ transform: `translateY(${-((rotationOffset * 1.5) % 180)}px)` }}
                    >
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">WHALE</div>
                      <div className="text-lg font-serif text-[#F5F3EE]">★ ★ ★</div>
                      <div className="text-xs font-mono text-[#8E9198]">CANNON</div>
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">WHALE</div>
                      <div className="text-lg font-serif text-[#F5F3EE]">★ ★ ★</div>
                      <div className="text-xs font-mono text-[#8E9198]">CANNON</div>
                    </div>
                  </div>

                  {/* Reel Drum 2 (Center) */}
                  <div className="relative flex-1 h-[240px] sm:h-[270px] bg-gradient-to-b from-stone-900 via-neutral-900 to-stone-950 rounded-sm border border-[#D4AF37]/50 overflow-hidden shadow-inner flex flex-col items-center justify-center">
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-14 border-y border-[#D4AF37]/80 bg-[#D4AF37]/10 z-10 pointer-events-none" />
                    
                    {/* Animated Symbol Strip 2 */}
                    <div 
                      className="flex flex-col items-center gap-6 transition-transform duration-75 text-center"
                      style={{ transform: `translateY(${-((rotationOffset * 2.1) % 180)}px)` }}
                    >
                      <div className="text-xs font-mono text-[#8E9198]">KEY</div>
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">GENIE</div>
                      <div className="text-lg font-serif text-[#F5F3EE]">BAR</div>
                      <div className="text-xs font-mono text-[#8E9198]">KEY</div>
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">GENIE</div>
                      <div className="text-lg font-serif text-[#F5F3EE]">BAR</div>
                    </div>
                  </div>

                  {/* Reel Drum 3 */}
                  <div className="relative flex-1 h-[240px] sm:h-[270px] bg-gradient-to-b from-stone-900 via-neutral-900 to-stone-950 rounded-sm border border-[#D4AF37]/30 overflow-hidden shadow-inner flex flex-col items-center justify-center">
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-14 border-y border-[#D4AF37]/60 bg-[#D4AF37]/5 z-10 pointer-events-none" />
                    
                    {/* Animated Symbol Strip 3 */}
                    <div 
                      className="flex flex-col items-center gap-6 transition-transform duration-75 text-center"
                      style={{ transform: `translateY(${-((rotationOffset * 1.8) % 180)}px)` }}
                    >
                      <div className="text-lg font-serif text-[#F5F3EE]">★ ★ ★</div>
                      <div className="text-xs font-mono text-[#8E9198]">CHERRY</div>
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">CORAL</div>
                      <div className="text-lg font-serif text-[#F5F3EE]">★ ★ ★</div>
                      <div className="text-xs font-mono text-[#8E9198]">CHERRY</div>
                      <div className="text-xl sm:text-2xl font-serif text-[#D4AF37]">777</div>
                      <div className="text-xs font-mono text-[#D6D4CE] tracking-wider">CORAL</div>
                    </div>
                  </div>
                </div>

                {/* Apparatus Bottom Diagnostic Readout */}
                <div className="relative z-10 pt-3 border-t border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-[#8E9198]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D6D4CE]">MECHANISM:</span>
                    <span>PSEUDO-RNG V3.4</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAmbientSpin(!ambientSpin)}
                    className="hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                  >
                    [{ambientSpin ? '회전 일시정지' : '시각 회전 재개'}]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Minimal Editorial Footer Strip */}
      <div className="relative z-10 w-full border-t border-white/[0.07] py-4 bg-[#08090B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#8E9198]">
          <div className="flex items-center gap-6">
            <span>INDEX: 001—006</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>AXIS: ARTIFACT & ALGORITHM</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>REEL ARCHIVE FOUNDATION</span>
          </div>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <span>SCROLL TO DECONSTRUCT</span>
            <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
