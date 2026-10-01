import React from 'react';

export const BasicsSection: React.FC = () => {
  return (
    <section id="basics" className="relative w-full py-24 lg:py-32 bg-[#0C0D10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Chapter Index & Curatorial Metadata (Col 1 to 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-10 lg:pb-0 lg:pr-12">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-4">
                <span>02</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
                <span>THE BASICS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3EE] mb-6 font-display">
                릴게임이란<br />무엇인가
              </h2>
              <p className="text-sm text-[#8E9198] leading-relaxed">
                원통형 릴의 회전 운동에서 출발하여 비디오 스크린과 컴퓨터 알고리즘으로 진화한
                아케이드 회전식 오락 기계의 구조와 사회문화적 궤적.
              </p>
            </div>

            {/* Archival Accession Specs */}
            <div className="mt-12 pt-8 border-t border-white/[0.06] space-y-4 text-xs font-mono text-[#8E9198]">
              <div>
                <span className="text-[#D6D4CE] block">ORIGIN:</span>
                <span>1895 Liberty Bell Mechanical Slot</span>
              </div>
              <div>
                <span className="text-[#D6D4CE] block">KOREAN ARCADE ERA:</span>
                <span>2002 — 2006 Golden Age & Reform</span>
              </div>
              <div>
                <span className="text-[#D6D4CE] block">CORE LOGIC:</span>
                <span>RNG Decoupled Theatrical Sequence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep-Dive Editorial Essay & Structural Deconstruction (Col 5 to 12) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-10">
            {/* Lead Narrative with Drop Cap */}
            <div className="prose prose-invert max-w-none text-[#D6D4CE] text-base sm:text-lg leading-relaxed font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-[#D4AF37]">
                릴게임(Reel Game)은 원통형 드럼(Reel) 또는 디스플레이 화면 속에 표현된 가상의 릴이 회전하다가 정지했을 때,
                사전에 규정된 페이라인(Payline) 상에 심볼이 어떻게 배열되는가에 따라 결과를 산출하는 대표적인 회전식 게임입니다.
                19세기 말 찰스 페이가 발명한 물리적 톱니바퀴 기계식 릴에서 시작된 이 장르는, 20세기 후반 마이크로프로세서의 도입과
                2000년대 고해상도 CRT/LCD 모니터의 결합을 통해 ‘비디오 릴게임’이라는 완전히 새로운 매체 양식으로 진화했습니다.
              </p>
            </div>

            {/* Asymmetric Comparative Panels: The Structural Shift */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="border border-white/[0.08] bg-[#111318] p-6 rounded-sm relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors">
                <div className="text-xs font-mono text-[#D4AF37] mb-2">[ PHASE 01 — 기계식 릴 ]</div>
                <h3 className="text-lg font-semibold text-[#F5F3EE] mb-3">물리적 모터와 톱니바퀴의 한계</h3>
                <p className="text-sm text-[#8E9198] leading-relaxed">
                  초기 기계식 릴은 스텝 모터와 물리적 브레이크에 의해 회전했습니다. 원통 둘레에 인쇄할 수 있는 심볼의 수가 대개 20~22개로 제한되어 있어,
                  배당률과 잭팟 확률의 폭을 수학적으로 넓히는 데 구조적 한계가 존재했습니다.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-[#111318] p-6 rounded-sm relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors">
                <div className="text-xs font-mono text-[#D4AF37] mb-2">[ PHASE 02 — 비디오 릴게임 ]</div>
                <h3 className="text-lg font-semibold text-[#F5F3EE] mb-3">소프트웨어 렌더링과 RNG의 결합</h3>
                <p className="text-sm text-[#8E9198] leading-relaxed">
                  비디오 화면으로 전환되면서 물리적 드럼은 소멸하고 가상 정지점(Virtual Stops)이 도입되었습니다.
                  결과는 시작 버튼을 누르는 1,000분의 1초 찰나에 난수생성기(RNG)가 확정하며, 릴의 회전은 오직 플레이어의 몰입을 위한 시각 연출로 재편되었습니다.
                </p>
              </div>
            </div>

            {/* Editorial Highlight Box: The Korean Cultural Context */}
            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 bg-gradient-to-r from-[#D4AF37]/[0.04] to-transparent">
              <h4 className="text-base font-semibold text-[#F5F3EE] mb-2">한국 아케이드 게임 규제사의 분수령</h4>
              <p className="text-sm text-[#D6D4CE] leading-relaxed">
                2000년대 중반 한국 시장에 등장한 ‘바다이야기’, ‘야마토’ 등은 화려한 예고 연출과 누적 연타 기믹을 결합하여 폭발적인 반향을 일으켰습니다.
                그러나 사행성 환전 구조와 맞물리며 2006년 대규모 사회적 파동을 촉발했고, 이는 현행 게임산업진흥에 관한 법률과 게임물관리위원회의
                엄격한 등급 분류 및 사행성 심의 기준이 탄생하는 결정적 계기가 되었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
