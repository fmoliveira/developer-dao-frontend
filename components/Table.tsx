type Row = Record<string, string>;

type Props = {
	caption: string;
	data: Row[];
};

export default function Table({ caption, data }: Props) {
	const firstRow = data?.[0] ?? {};
	const columnList = Object.keys(firstRow);

	return (
		<div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
			<table className="min-w-full">
				<caption className="sr-only">{caption}</caption>
				<TableHeader columnList={columnList} />
				<TableBody data={data} columnList={columnList} />
			</table>
		</div>
	);
}

type TableHeaderProps = {
	columnList: string[];
};

function TableHeader({ columnList }: TableHeaderProps) {
	return (
		<thead className="bg-gray-50 border-b border-gray-200">
			<tr>
				{columnList.map((column) => (
					<th
						scope="col"
						className="p-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
						key={column}
					>
						{column}
					</th>
				))}
			</tr>
		</thead>
	);
}

type TableBodyProps = {
	data: Row[];
	columnList: string[];
};

function TableBody({ data, columnList }: TableBodyProps) {
	return (
		<tbody className="bg-white divide-y divide-gray-200">
			{data.map((row) => (
				<tr key={row.id}>
					{columnList.map((column) => (
						<td
							key={`${row.id}_${column}`}
							className="px-3 py-1 whitespace-nowrap"
						>
							{String(row[column])}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
}
