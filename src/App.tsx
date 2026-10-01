import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BasicsSection } from './components/BasicsSection';
import { TypographicStatement } from './components/TypographicStatement';
import { GameIndexSection } from './components/GameIndexSection';
import { RngLabSection } from './components/RngLabSection';
import { ComparisonSection } from './components/ComparisonSection';
import { GlossarySection } from './components/GlossarySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F3EE] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F5F3EE]">
      {/* 3-Zone Sticky Navigation */}
      <Navigation />

      <main className="flex-1 w-full">
        {/* Full-Viewport Editorial Hero with 3D Reel Apparatus */}
        <HeroSection />

        {/* Section 01: Editorial Deep-Dive on Reel Game Origins & Mechanics */}
        <BasicsSection />

        {/* Typographic Statement 01 */}
        <TypographicStatement
          index="01"
          contextTag="ILLUSION VS ALGORITHM"
          quote="화려한 연출과 실제 규칙은 다릅니다."
          subtext="화면을 가르는 고래의 유영이나 파동포의 카운트다운은 당첨 확률을 높이는 것이 아니라, 이미 내부 RNG에서 확정된 결과를 시각적으로 극화하여 플레이어의 기대 심리를 지연시키는 연극적 프레젠테이션에 불과합니다."
        />

        {/* Section 02: The 6 Iconic Games Editorial Index */}
        <GameIndexSection />

        {/* Typographic Statement 02 */}
        <TypographicStatement
          index="02"
          contextTag="STRUCTURAL TAXONOMY"
          quote="이름보다 구조를 먼저 보세요."
          subtext="바다이야기, 손오공, 오션파라다이스는 저마다 다른 그래픽 테마와 캐릭터를 내세웠으나, 그 심장부에서 작동한 5릴 9페이라인의 수학적 페이아웃 구조와 누적 연타 알고리즘은 본질적으로 동일한 설계도를 공유했습니다."
        />

        {/* Section 03: Interactive RNG Deconstruction Lab */}
        <RngLabSection />

        {/* Section 04: Comparative Matrix Data Table */}
        <ComparisonSection />

        {/* Section 05: Magazine Terminology Glossary (8 Key Terms) */}
        <GlossarySection />

        {/* Section 06: Minimal Accordion FAQ (5 Core Inquiries) */}
        <FaqSection />
      </main>

      {/* Editorial Footer & Legal Academic Archive Notice */}
      <Footer />
    </div>
  );
}
