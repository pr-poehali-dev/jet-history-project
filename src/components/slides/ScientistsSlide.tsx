const scientists = [
  {
    name: "К.Э. Циолковский",
    years: "1857–1935",
    country: "Россия",
    photo: "https://cdn.poehali.dev/projects/f5b65b78-6a8c-403f-89ab-6ab4412f2155/files/32fdfad7-4b55-4d3e-bbc4-4f6ade1927f7.jpg",
    role: "Теоретик реактивного движения",
    achievements: ["Уравнение Циолковского (1903)", "Теория многоступенчатых ракет", "Концепция жидкостного ракетного двигателя"],
  },
  {
    name: "Р. Годдард",
    years: "1882–1945",
    country: "США",
    photo: "https://cdn.poehali.dev/projects/f5b65b78-6a8c-403f-89ab-6ab4412f2155/files/9575ea7f-8541-425b-bad1-c167fc0a0574.jpg",
    role: "Первый практик ракетостроения",
    achievements: ["Первая жидкостная ракета (1926)", "Патент на многоступенчатые ракеты", "214 патентов в области ракетостроения"],
  },
  {
    name: "В. фон Браун",
    years: "1912–1977",
    country: "Германия / США",
    photo: "https://cdn.poehali.dev/projects/f5b65b78-6a8c-403f-89ab-6ab4412f2155/files/1eb43619-da8f-44c8-acdd-ca0296bcf683.jpg",
    role: "Главный конструктор Фау-2 и Сатурн-V",
    achievements: ["Ракета A-4 / Фау-2 (1942)", "Ракета-носитель Сатурн-V", "Лунная программа Аполлон (1969)"],
  },
  {
    name: "С.П. Королёв",
    years: "1907–1966",
    country: "СССР",
    photo: "https://cdn.poehali.dev/projects/f5b65b78-6a8c-403f-89ab-6ab4412f2155/files/36f0354f-66c9-46c9-beb6-e5eaf22814f0.jpg",
    role: "Главный конструктор советской космонавтики",
    achievements: ["МБР Р-7 (1957)", "Спутник-1 — первый ИСЗ (1957)", "Полёт Гагарина (1961)"],
  },
];

export default function ScientistsSlide() {
  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="bg-[#1a1a2e] px-10 py-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-[#c9a84c] font-mono text-2xl font-bold">III</span>
          <div>
            <h2 className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ключевые учёные и их вклад
            </h2>
            <p className="text-[#9a9ab5] text-xs tracking-widest uppercase">Пионеры реактивного движения</p>
          </div>
        </div>
        <div className="text-[#3a3a5a] font-mono text-xs">03 / 04</div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-0 overflow-hidden">
        {scientists.map((s, i) => (
          <div key={i} className={`flex flex-col border-r border-[#ddd8cc] last:border-r-0 ${i % 2 === 0 ? "bg-[#f5f0e8]" : "bg-white"}`}>
            <div className="bg-[#1a1a2e] p-4 flex flex-col items-center gap-2">
              <img
                src={s.photo}
                alt={s.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#c9a84c] grayscale"
              />
              <div className="text-center">
                <p className="text-white text-xs font-bold leading-tight">{s.name}</p>
                <p className="text-[#c9a84c] text-[10px] font-mono mt-0.5">{s.years}</p>
                <p className="text-[#6a6a8a] text-[10px] mt-0.5">{s.country}</p>
              </div>
            </div>
            <div className="p-3 flex-1 flex flex-col gap-2">
              <div>
                <p className="text-[#8a8a6a] text-[9px] uppercase tracking-widest font-semibold mb-1">Роль</p>
                <p className="text-[#1a1a2e] text-[11px] font-semibold leading-snug">{s.role}</p>
              </div>
              <div>
                <p className="text-[#8a8a6a] text-[9px] uppercase tracking-widest font-semibold mb-1.5">Достижения</p>
                <ul className="space-y-1">
                  {s.achievements.map((a, j) => (
                    <li key={j} className="flex gap-1.5 items-start">
                      <span className="text-[#c9a84c] text-[10px] mt-0.5 shrink-0">▸</span>
                      <span className="text-[#3a3a3a] text-[10px] leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
