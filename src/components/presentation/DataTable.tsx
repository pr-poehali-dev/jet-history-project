interface TableRow {
  cells: string[];
  highlight?: boolean;
}

interface DataTableProps {
  headers: string[];
  rows: TableRow[];
  caption?: string;
}

const DataTable = ({ headers, rows, caption }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="text-xs text-gray-500 text-left mb-2 italic">{caption}</caption>
        )}
        <thead>
          <tr className="bg-gray-800 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold text-xs uppercase tracking-wider border border-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-amber-50 font-semibold"
                  : i % 2 === 0
                  ? "bg-white"
                  : "bg-gray-50"
              }
            >
              {row.cells.map((cell, j) => (
                <td key={j} className="px-4 py-2 border border-gray-200 text-gray-800 text-xs leading-snug">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
