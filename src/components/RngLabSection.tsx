import React, { useState } from 'react';

export const RngLabSection: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [rngData, setRngData] = useState<{
    seedHex: string;
    verdict: string;
    stopSymbols: [string, string, string];
    timestamp: string;
    durationMs: number;
    delaySec: number;
  }>({
    seedHex: '0x7F4A9E21',
    verdict: '체리 1회 배합 (소액 배당 확정)',
    stopSymbols: ['체리', '체리', '조개'],
    timestamp: '2026-10-01 00:00:00.001',
    durationMs: 0.9,
    delaySec: 2.4,
  });

  const [reelPosition, setReelPosition] = useState(0);

  const handleSimulateRng = () => {
    if (spinning) return;
    setSpinning(true);

    // 1. Instant RNG computation (takes < 1ms)
    const randomSeed = '0x' + Math.floor(Math.random() * 0xFFFFFFF).toString(16).toUpperCase();
    const outcomes = [
      { verdict: '일반 미당첨 (독립 시행 실패)', symbols: ['조개', '해파리', '거북이'] as [string, string, string] },
      { verdict: '체리 1라인 정렬 (저배당)', symbols: ['체리', '체리', '해파리'] as [string, string, string] },
      { verdict: '황금 고래 예고 연출 트리거 확정', symbols: ['고래', '고래', '고래'] as [string, string, string] },
      { verdict: '파동포 카운트다운 컷인 트리거', symbols: ['전함', '전함', '파동포'] as [string, string, string] },
    ];
    const picked = outcomes[Math.floor(Math.random() * outcomes.length)];

    setRngData({
      seedHex: randomSeed,
      verdict: picked.verdict,
      stopSymbols: picked.symbols,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 23),
      durationMs: Number((Math.random() * 0.4 + 0.6).toFixed(2)),
      delaySec: 2.2,
    });

    // 2. Theatrical spin animation lasts 2200ms
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setReelPosition((prev) => (prev + 35) % 360);
      if (frame >= 35) {
        clearInterval(interval);
        setSpinning(false);
      }
    }, 60);
  };

  return (
    <section id="rng-lab" className="relative w-full py-24 lg:py-32 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-3">
              <span>03</span>
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              <span>EXPERIMENTAL LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EE] font-display">
              RNG와 연출의 분리 실험실
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#8E9198] max-w-md font-light">
            시작 버튼을 누르는 순간 결과는 1/1,000초 만에 종료됩니다. 회전하는 릴은 관객을 위한 극장에 불과함을 직접 검증합니다.
          </p>
        </div>

        {/* The Laboratory Layout: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The Virtual Reel Simulator (Col 1 to 6) */}
          <div className="lg:col-span-6 border border-white/[0.08] bg-[#0E1015] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8E9198] border-b border-white/[0.06] pb-3 mb-6">
                <span>SIMULATOR VIEWPORT</span>
                <span className={spinning ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}>
                  {spinning ? '● THEATRICAL ANIMATION RUNNING' : '● SYSTEM READY'}
                </span>
              </div>

              {/* Reel Window */}
              <div className="relative h-44 bg-[#08090B] border border-white/10 rounded-sm overflow-hidden flex items-center justify-around px-4">
                {/* Visual Glass Sheen */}
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-20" 
                />
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 border-y border-[#D4AF37]/40 bg-[#D4AF37]/[0.03] z-20" 
                />

                {/* 3 Reel Columns */}
                {[0, 1, 2].map((reelIdx) => (
                  <div key={reelIdx} className="relative z-10 flex flex-col items-center justify-center">
                    <div
                      className="transition-transform duration-75 text-center font-display"
                      style={{
                        transform: spinning ? `translateY(${((reelPosition * (reelIdx + 1.2)) % 60) - 30}px)` : 'translateY(0)',
                      }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-[#F5F3EE] mb-1">
                        {spinning ? '•••' : rngData.stopSymbols[reelIdx]}
                      </div>
                      <div className="text-[10px] font-mono text-[#8E9198]">
                        REEL 0{reelIdx + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trigger Control */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#8E9198]">
                <span>INSPECTION TARGET: </span>
                <span className="text-[#D6D4CE]">INDEPENDENT RANDOM TRIAL</span>
              </div>
              <button
                type="button"
                onClick={handleSimulateRng}
                disabled={spinning}
                className="w-full sm:w-auto px-6 py-3 bg-[#D4AF37] hover:bg-[#E2C974] disabled:opacity-40 text-[#08090B] text-xs font-mono font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
              >
                {spinning ? '연출 상영 중 (2.4s)...' : '레버 작동 ( 난수 생성 )'}
              </button>
            </div>
          </div>

          {/* Right: Live Diagnostic Telemetry (Col 7 to 12) */}
          <div className="lg:col-span-6 border border-white/[0.08] bg-[#0E1015] p-6 sm:p-8 rounded-sm flex flex-col justify-between font-mono">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8E9198] border-b border-white/[0.06] pb-3 mb-6">
                <span>RNG ENGINE TELEMETRY</span>
                <span className="text-[#D4AF37]">SEED REGISTER</span>
              </div>

              {/* Data Readouts */}
              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                  <span className="text-[#8E9198]">GENERATED SEED (32-BIT HEX):</span>
                  <span className="text-[#F5F3EE] font-bold text-sm tracking-wider tabular-nums">{rngData.seedHex}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                  <span className="text-[#8E9198]">CALCULATION LATENCY:</span>
                  <span className="text-emerald-400 font-bold tabular-nums">{rngData.durationMs} ms (즉각 확정)</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                  <span className="text-[#8E9198]">THEATRICAL DELAY APPLIED:</span>
                  <span className="text-[#D4AF37] tabular-nums">{rngData.delaySec} sec (심리적 지연)</span>
                </div>

                <div className="py-3 border-b border-white/[0.04]">
                  <span className="text-[#8E9198] block mb-1">VERDICT REGISTERED:</span>
                  <span className="text-sm font-semibold text-[#F5F3EE]">{rngData.verdict}</span>
                </div>
              </div>

              {/* Timeline Contrast Graph */}
              <div className="mt-6 pt-4">
                <div className="text-[11px] text-[#8E9198] mb-2">시간축 비교 (Time Horizon Contrast)</div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-[#8E9198] mb-1">
                      <span>RNG 수학적 판정</span>
                      <span className="text-emerald-400 tabular-nums">0.001s [종료]</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-xs overflow-hidden">
                      <div className="w-[3%] h-full bg-emerald-400" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-[#8E9198] mb-1">
                      <span>화면 릴 회전 연출</span>
                      <span className="text-[#D4AF37] tabular-nums">2.400s [상영 지연]</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-xs overflow-hidden">
                      <div className="w-[95%] h-full bg-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-[#8E9198] font-sans leading-relaxed">
              * 플레이어가 정지 버튼을 누를 때 느끼는 '손맛'이나 타이밍은 실제로는 이미 메모리에 기록된 0x{rngData.seedHex.substring(2, 6)} 값을 화면에 표출하는 애니메이션 트리거일 뿐이며, 확률을 변경하지 못합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
