import React from 'react';

interface TypographicStatementProps {
  quote: string;
  subtext: string;
  contextTag: string;
  index: string;
}

export const TypographicStatement: React.FC<TypographicStatementProps> = ({
  quote,
  subtext,
  contextTag,
  index,
}) => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#08090B] border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient subtle line */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3 text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-6">
          <span>THESIS {index}</span>
          <span className="w-6 h-[1px] bg-[#D4AF37]/40" />
          <span>{contextTag}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium tracking-tight text-[#F5F3EE] mb-8 leading-[1.15]" style={{ textWrap: 'balance' }}>
          “{quote}”
        </h2>

        <p className="text-sm sm:text-base text-[#8E9198] max-w-2xl mx-auto font-light leading-relaxed">
          {subtext}
        </p>
      </div>
    </section>
  );
};
