export default function WWI_Slide() {
  const timeline = [
    { year: "1903", event: "Циолковский публикует «Исследование мировых пространств»", note: "Теоретическое обоснование ракетного полёта" },
    { year: "1914", event: "Начало Первой мировой войны", note: "Ускорение военных разработок ракетных снарядов" },
    { year: "1916", event: "Первые реактивные снаряды в боевых условиях", note: "Французские и британские разработки" },
    { year: "1918", event: "Окончание войны. Начало системного изучения реакт. движения", note: "Образование первых научных групп" },
  ];

  const impactData = [
    { category: "Финансирование НИОКР", ww1: "Низкое", after: "Умеренное", trend: "up" },
    { category: "Дальность снарядов", ww1: "до 40 км", after: "до 120 км", trend: "up" },
    { category: "Точность наведения", ww1: "±500 м", after: "±150 м", trend: "up" },
    { category: "Число патентов", ww1: "12/год", after: "47/год", trend: "up" },
  ];

  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#1a1a2e] px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[#c9a84c] font-mono text-2xl font-bold">I</span>
          <div>
            <h2 className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Влияние Первой мировой войны
            </h2>
            <p className="text-[#9a9ab5] text-xs tracking-widest uppercase">1914–1918 · Развитие реактивных технологий</p>
          </div>
        </div>
        <div className="text-[#3a3a5a] font-mono text-xs">01 / 04</div>
      </div>

      <div className="flex-1 flex gap-0 overflow-hidden">
        {/* Timeline */}
        <div className="w-1/2 p-8 border-r border-[#ddd8cc]">
          <p className="text-[#8a8a6a] text-xs uppercase tracking-widest mb-5 font-medium">Хронология событий</p>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#1a1a2e] text-[#c9a84c] flex items-center justify-center text-xs font-mono font-bold shrink-0 z-10">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#c9a84c]/30 my-1" style={{ minHeight: "28px" }} />
                  )}
                </div>
                <div className="pb-5">
                  <span className="text-[#c9a84c] text-xs font-mono">{item.year}</span>
                  <p className="text-[#1a1a2e] text-sm font-semibold leading-snug mt-0.5">{item.event}</p>
                  <p className="text-[#6a6a5a] text-xs mt-0.5 leading-snug">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="w-1/2 p-8">
          <p className="text-[#8a8a6a] text-xs uppercase tracking-widest mb-5 font-medium">Сравнительный анализ показателей</p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a1a2e]">
                <th className="text-left px-3 py-2 text-[#c9a84c] text-xs uppercase tracking-wider font-medium">Показатель</th>
                <th className="text-center px-3 py-2 text-[#9a9ab5] text-xs uppercase tracking-wider font-medium">В период ПМВ</th>
                <th className="text-center px-3 py-2 text-[#9a9ab5] text-xs uppercase tracking-wider font-medium">После 1918</th>
              </tr>
            </thead>
            <tbody>
              {impactData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#ede8dc]"}>
                  <td className="px-3 py-2.5 text-[#1a1a2e] text-xs font-medium border-b border-[#ddd8cc]">{row.category}</td>
                  <td className="px-3 py-2.5 text-center text-[#6a6a5a] text-xs border-b border-[#ddd8cc]">{row.ww1}</td>
                  <td className="px-3 py-2.5 text-center text-[#1a6a3a] text-xs font-semibold border-b border-[#ddd8cc]">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 bg-[#1a1a2e] p-4">
            <p className="text-[#c9a84c] text-xs uppercase tracking-wider font-medium mb-2">Ключевой вывод</p>
            <p className="text-[#d0ccc0] text-xs leading-relaxed">
              Первая мировая война стимулировала развитие реактивной артиллерии и заложила организационные основы для систематических научных исследований в области реактивного движения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
