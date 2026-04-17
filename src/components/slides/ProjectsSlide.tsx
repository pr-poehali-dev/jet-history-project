const projects = [
  {
    name: "Фау-2 (A-4)",
    country: "Германия",
    period: "1936–1945",
    color: "#c9a84c",
    description: "Первая в мире баллистическая ракета дальнего действия. Разработана в Пенемюнде под руководством В. фон Брауна.",
    specs: [
      { label: "Дальность", value: "320 км" },
      { label: "Высота апогея", value: "85 км" },
      { label: "Масса", value: "12 500 кг" },
      { label: "Тяга", value: "25 000 кгс" },
    ],
    significance: "Прямой прародитель всех современных баллистических ракет и ракет-носителей.",
  },
  {
    name: "Р-7 «Семёрка»",
    country: "СССР",
    period: "1953–1957",
    color: "#c94a4a",
    description: "Первая в мире межконтинентальная баллистическая ракета. Вывела на орбиту Спутник-1 и Гагарина.",
    specs: [
      { label: "Дальность", value: "8000 км" },
      { label: "Высота", value: "орбитальная" },
      { label: "Масса", value: "280 000 кг" },
      { label: "Тяга", value: "398 000 кгс" },
    ],
    significance: "Положила начало космической эре. Модификации используются по сей день («Союз»).",
  },
  {
    name: "Сатурн V",
    country: "США",
    period: "1960–1973",
    color: "#4a7ac9",
    description: "Самая мощная ракета-носитель в истории. Обеспечила высадку людей на Луну в рамках программы «Аполлон».",
    specs: [
      { label: "Высота", value: "110,6 м" },
      { label: "Масса", value: "2 970 000 кг" },
      { label: "Тяга (1 ст.)", value: "3 400 000 кгс" },
      { label: "Полётов", value: "13" },
    ],
    significance: "Единственная ракета, доставившая людей за пределы орбиты Земли.",
  },
];

export default function ProjectsSlide() {
  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="bg-[#1a1a2e] px-10 py-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-[#c9a84c] font-mono text-2xl font-bold">IV</span>
          <div>
            <h2 className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Значимые технические проекты
            </h2>
            <p className="text-[#9a9ab5] text-xs tracking-widest uppercase">Ключевые разработки XX века</p>
          </div>
        </div>
        <div className="text-[#3a3a5a] font-mono text-xs">04 / 04</div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-0 overflow-hidden">
        {projects.map((p, i) => (
          <div key={i} className="border-r border-[#ddd8cc] last:border-r-0 flex flex-col overflow-hidden">
            <div className="h-1 w-full" style={{ backgroundColor: p.color }} />
            <div className="bg-[#1a1a2e] px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.name}</p>
                <p className="text-[#9a9ab5] text-[10px] font-mono">{p.country} · {p.period}</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: p.color }} />
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
              <p className="text-[#3a3a3a] text-xs leading-relaxed">{p.description}</p>
              <div>
                <p className="text-[#8a8a6a] text-[9px] uppercase tracking-widest font-semibold mb-2">Технические характеристики</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {p.specs.map((spec, j) => (
                    <div key={j} className="bg-[#ede8dc] border border-[#ddd8cc] px-2 py-1.5">
                      <p className="text-[#8a8a6a] text-[9px] uppercase tracking-wider">{spec.label}</p>
                      <p className="text-[#1a1a2e] text-xs font-bold mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#ddd8cc] pt-2 mt-auto">
                <p className="text-[#8a8a6a] text-[9px] uppercase tracking-widest font-semibold mb-1">Историческое значение</p>
                <p className="text-[#3a3a3a] text-[11px] leading-snug">{p.significance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
