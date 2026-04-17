interface TimelineItemProps {
  year: string;
  event: string;
  impact: string;
  isLast?: boolean;
}

const TimelineItem = ({ year, event, impact, isLast }: TimelineItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gray-800 text-amber-400 flex items-center justify-center text-xs font-black shrink-0">
          {year.slice(-2)}
        </div>
        {!isLast && <div className="w-0.5 bg-gray-300 flex-1 mt-1" />}
      </div>
      <div className="pb-6">
        <p className="text-xs font-bold text-amber-600 mb-0.5">{year}</p>
        <p className="text-sm font-bold text-gray-900">{event}</p>
        <p className="text-xs text-gray-600 mt-0.5 leading-snug">{impact}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
