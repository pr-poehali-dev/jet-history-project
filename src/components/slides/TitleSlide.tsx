export default function TitleSlide() {
  return (
    <div className="w-full h-full flex" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* Left dark panel */}
      <div className="w-2/5 bg-[#1a1a2e] flex flex-col justify-between p-10">
        <div>
          <div className="w-12 h-1 bg-[#c9a84c] mb-8" />
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Академическая презентация
          </p>
          <p className="text-[#9a9ab5] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            История науки и техники
          </p>
        </div>
        <div>
          <div className="border-t border-[#2a2a4a] pt-6">
            <p className="text-[#5a5a7a] text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              2024 / Реактивное движение
            </p>
          </div>
        </div>
      </div>

      {/* Right cream panel */}
      <div className="w-3/5 bg-[#f5f0e8] flex flex-col justify-center px-12 py-10 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#c9a84c]/30" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-t border-r border-[#c9a84c]/20" />

        <div className="relative">
          <h1 className="text-6xl font-bold text-[#1a1a2e] leading-none mb-3">
            Реактивное
          </h1>
          <h1 className="text-6xl font-light italic text-[#c9a84c] leading-none mb-8">
            движение
          </h1>
          <div className="w-16 h-px bg-[#1a1a2e] mb-6" />
          <p className="text-[#4a4a6a] text-lg font-light leading-relaxed max-w-sm">
            От теоретических основ до космической эры:
            влияние мировых войн на развитие ракетных технологий
          </p>

          <div className="mt-8 flex gap-6">
            {["I. Первая мировая", "II. Вторая мировая", "III. Учёные", "IV. Проекты"].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                <span className="text-[#6a6a8a] text-xs" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
