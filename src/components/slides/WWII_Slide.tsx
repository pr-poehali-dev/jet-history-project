export default function WWII_Slide() {
  const timeline = [
    { year: "1932", event: "Основание исследовательского центра Пенемюнде", note: "Германия создаёт главную ракетную лабораторию" },
    { year: "1942", event: "Первый успешный пуск ракеты A-4 (Фау-2)", note: "Суборбитальный полёт на высоту 85 км" },
    { year: "1944", event: "Боевое применение ракет Фау-2 против Лондона", note: "Более 3000 пусков по союзным городам" },
    { year: "1945", event: "Операция «Скрепка»: вывоз учёных в США и СССР", note: "Начало ракетных программ сверхдержав" },
  ];

  const compData = [
    { param: "Дальность", germany: "320 км", usa: "80 км", ussr: "≈300 км" },
    { param: "Масса БЧ", germany: "975 кг", usa: "н/д", ussr: "950 кг" },
    { param: "Высота апогея", germany: "85 км", usa: "20 км", ussr: "80 км" },
    { param: "Кол-во пусков", germany: "3172", usa: "142", ussr: "н/д" },
    { param: "Точность (КВО)", germany: "±4 км", usa: "±2 км", ussr: "±5 км" },
  ];

  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="bg-[#1a1a2e] px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[#c9a84c] font-mono text-2xl font-bold">II</span>
          <div>
            <h2 className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Влияние Второй мировой войны
            </h2>
            <p className="text-[#9a9ab5] text-xs tracking-widest uppercase">1939–1945 · Ракетные программы держав</p>
          </div>
        </div>
        <div className="text-[#3a3a5a] font-mono text-xs">02 / 04</div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/2 p-7 border-r border-[#ddd8cc] flex flex-col">
          <p className="text-[#8a8a6a] text-xs uppercase tracking-widest mb-4 font-medium">Ключевые события</p>
          <div className="flex-1 space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#c9a84c] text-[#1a1a2e] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#1a1a2e]/20 my-1" style={{ minHeight: "24px" }} />
                  )}
                </div>
                <div className="pb-4">
                  <span className="text-[#1a1a2e] text-xs font-mono font-bold">{item.year}</span>
                  <p className="text-[#1a1a2e] text-sm font-semibold leading-snug mt-0.5">{item.event}</p>
                  <p className="text-[#6a6a5a] text-xs mt-0.5 leading-snug">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a2e] p-3 mt-2">
            <p className="text-[#c9a84c] text-xs uppercase tracking-wider font-medium mb-1">Итог</p>
            <p className="text-[#d0ccc0] text-xs leading-relaxed">
              ВМВ превратила реактивное движение из теоретической дисциплины в стратегическую военную технологию, породив «ракетную гонку» холодной войны.
            </p>
          </div>
        </div>

        <div className="w-1/2 p-7 flex flex-col">
          <p className="text-[#8a8a6a] text-xs uppercase tracking-widest mb-4 font-medium">Сравнение ракетных программ (1945)</p>
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-[#1a1a2e]">
                <th className="text-left px-3 py-2 text-[#c9a84c] uppercase tracking-wider font-medium">Параметр</th>
                <th className="text-center px-3 py-2 text-[#9a9ab5] uppercase tracking-wider font-medium">Германия</th>
                <th className="text-center px-3 py-2 text-[#9a9ab5] uppercase tracking-wider font-medium">США</th>
                <th className="text-center px-3 py-2 text-[#9a9ab5] uppercase tracking-wider font-medium">СССР</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#ede8dc]"}>
                  <td className="px-3 py-2.5 text-[#1a1a2e] font-medium border-b border-[#ddd8cc]">{row.param}</td>
                  <td className="px-3 py-2.5 text-center text-[#8a3a1a] font-semibold border-b border-[#ddd8cc]">{row.germany}</td>
                  <td className="px-3 py-2.5 text-center text-[#1a4a8a] border-b border-[#ddd8cc]">{row.usa}</td>
                  <td className="px-3 py-2.5 text-center text-[#8a1a1a] border-b border-[#ddd8cc]">{row.ussr}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { country: "Германия", rocket: "Фау-2 (A-4)", color: "#c9a84c" },
              { country: "США", rocket: "WAC Corporal", color: "#4a7ac9" },
              { country: "СССР", rocket: "Р-1 (копия A-4)", color: "#c94a4a" },
            ].map((c) => (
              <div key={c.country} className="border border-[#ddd8cc] p-2.5 bg-white">
                <div className="w-full h-1 mb-2" style={{ backgroundColor: c.color }} />
                <p className="font-bold text-[#1a1a2e] text-xs">{c.country}</p>
                <p className="text-[#6a6a5a] text-[10px] mt-0.5">{c.rocket}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
