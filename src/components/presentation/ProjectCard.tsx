interface ProjectCardProps {
  name: string;
  country: string;
  period: string;
  description: string;
  specs: { label: string; value: string }[];
  significance: string;
}

const ProjectCard = ({ name, country, period, description, specs, significance }: ProjectCardProps) => {
  return (
    <div className="border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm">
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <h3 className="text-white font-black text-base">{name}</h3>
        <div className="text-right">
          <p className="text-amber-400 text-xs font-bold">{country}</p>
          <p className="text-gray-400 text-xs">{period}</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-gray-700 leading-relaxed">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          {specs.map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 px-2 py-1.5 rounded-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wider text-[10px]">{s.label}</p>
              <p className="text-xs font-bold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Значимость</p>
          <p className="text-xs text-gray-700 leading-snug">{significance}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
