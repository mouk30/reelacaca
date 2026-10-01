import React, { useState } from 'react';
import { FAQ_LIST } from '../data/archiveData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-24 lg:py-32 bg-[#08090B] border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-8 mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-3">
            <span>06</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            <span>CRITICAL INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EE] font-display">
            자주 묻는 질문과 사실 검증
          </h2>
          <p className="mt-3 text-sm text-[#8E9198] font-light">
            아케이드 릴게임의 기원, 확률 조작과 RNG의 차이, 그리고 아카이브의 공공적 학술 목적을 명확히 밝힙니다.
          </p>
        </div>

        {/* Minimal Accordion with Hairline Dividers (No rounded pill cards) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIdx === index;

            return (
              <div key={index} className="py-6 sm:py-8 transition-colors hover:bg-white/[0.01]">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <span className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase block mb-1.5">
                      Q0{index + 1} · {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#F5F3EE] group-hover:text-[#D4AF37] transition-colors font-display leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Elegant +/- toggle indicator */}
                  <span className="text-2xl font-light text-[#8E9198] group-hover:text-[#D4AF37] transition-colors shrink-0 ml-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-[#D6D4CE] leading-relaxed font-light animate-in fade-in duration-200">
                    <p className="border-l border-[#D4AF37]/50 pl-4 py-1">
                      {faq.answer}
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
