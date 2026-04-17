interface ScientistCardProps {
  name: string;
  years: string;
  nationality: string;
  photo: string;
  achievements: string[];
  keyContribution: string;
}

const ScientistCard = ({ name, years, nationality, photo, achievements, keyContribution }: ScientistCardProps) => {
  return (
    <div className="bg-white border border-gray-300 rounded-sm shadow-md overflow-hidden flex flex-col">
      <div className="bg-gray-800 p-4 flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 grayscale"
        />
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
          <p className="text-amber-400 text-sm font-medium">{years}</p>
          <p className="text-gray-400 text-xs">{nationality}</p>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Ключевой вклад</p>
          <p className="text-sm text-gray-800 font-medium leading-snug">{keyContribution}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Достижения</p>
          <ul className="space-y-1">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="text-amber-500 font-bold mt-0.5">▸</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScientistCard;
