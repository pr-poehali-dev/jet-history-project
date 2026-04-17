interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="border-b-2 border-gray-800 pb-4 mb-8">
      <div className="flex items-baseline gap-4">
        <span className="text-4xl font-black text-amber-500 font-mono">{number}</span>
        <div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wide">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
