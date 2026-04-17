import { useState } from "react";
import TitleSlide from "@/components/slides/TitleSlide";
import WWI_Slide from "@/components/slides/WWI_Slide";
import WWII_Slide from "@/components/slides/WWII_Slide";
import ScientistsSlide from "@/components/slides/ScientistsSlide";
import ProjectsSlide from "@/components/slides/ProjectsSlide";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 0, component: TitleSlide, title: "Титул" },
  { id: 1, component: WWI_Slide, title: "Первая мировая война" },
  { id: 2, component: WWII_Slide, title: "Вторая мировая война" },
  { id: 3, component: ScientistsSlide, title: "Ключевые учёные" },
  { id: 4, component: ProjectsSlide, title: "Технические проекты" },
];

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const CurrentSlide = slides[current].component;

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col">
      {/* Top nav */}
      <header className="flex items-center justify-between px-8 py-3 bg-[#0f0f1a] border-b border-[#2a2a4a]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#c9a84c] flex items-center justify-center">
            <Icon name="Rocket" size={16} className="text-[#0f0f1a]" />
          </div>
          <span className="text-[#c9a84c] font-serif text-sm tracking-widest uppercase">
            Реактивное движение
          </span>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-[#c9a84c] w-6" : "bg-[#3a3a5a] hover:bg-[#5a5a7a]"
              }`}
              title={s.title}
            />
          ))}
        </div>
        <div className="text-[#5a5a7a] font-mono text-xs">
          {current + 1} / {slides.length}
        </div>
      </header>

      {/* Slide area */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl aspect-[16/9] bg-[#f5f0e8] shadow-2xl shadow-black/50 overflow-hidden relative">
          <CurrentSlide />
        </div>
      </main>

      {/* Controls */}
      <footer className="flex items-center justify-center gap-6 py-4 bg-[#0f0f1a] border-t border-[#2a2a4a]">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2 border border-[#3a3a5a] text-[#9a9ab5] hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-mono"
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>
        <span className="text-[#3a3a5a] font-serif text-xs tracking-widest uppercase">
          {slides[current].title}
        </span>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-5 py-2 border border-[#3a3a5a] text-[#9a9ab5] hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-mono"
        >
          Вперёд
          <Icon name="ChevronRight" size={16} />
        </button>
      </footer>
    </div>
  );
}
