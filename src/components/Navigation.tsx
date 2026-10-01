import React, { useState } from 'react';

interface NavigationProps {
  onSelectGame?: (gameId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '6대 명작 색인', href: '#game-index' },
    { label: '개념 해체', href: '#basics' },
    { label: 'RNG 실험실', href: '#rng-lab' },
    { label: '비교 매트릭스', href: '#comparison' },
    { label: '용어 사전', href: '#glossary' },
    { label: '질문과 진실', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#08090B]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Zone 1: Single Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2.5 font-display text-base font-semibold tracking-tight text-[#F5F3EE] hover:text-[#D4AF37] transition-colors"
        >
          <span className="font-serif-luxury tracking-widest text-[#D4AF37]">REEL ARCHIVE</span>
          <span className="text-xs text-[#8E9198] font-normal tracking-normal group-hover:text-[#D6D4CE] transition-colors">
            릴게임 아카이브
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-[#8E9198]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#F5F3EE] transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://xoreel.net"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#F6E27A]/50 bg-gradient-to-r from-[#D4AF37] to-[#B38722] hover:from-[#E2BE4A] hover:to-[#C99E2E] text-white font-bold text-xs px-4 py-2 rounded-sm transition-all duration-200 tracking-wide whitespace-nowrap shadow-sm shadow-[#D4AF37]/30"
          >
            사이트 바로가기
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-[#8E9198] hover:text-[#F5F3EE] focus:outline-none"
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Zero layout shift) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E1015] px-6 py-5 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#D6D4CE]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://xoreel.net"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center bg-gradient-to-r from-[#D4AF37] to-[#B38722] text-white text-xs font-bold py-2.5 rounded-sm shadow-sm"
            >
              사이트 바로가기
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
