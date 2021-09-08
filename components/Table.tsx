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
	const { rowList, isCapped } = useRowList(data);

	return (
		<tbody className="bg-white divide-y divide-gray-200">
			{rowList.map((row) => (
				<tr key={row.id}>
					{columnList.map((column) => (
						<td
							key={getKey(row, column)}
							className="px-3 py-1 whitespace-nowrap"
						>
							{row[column]}
						</td>
					))}
				</tr>
			))}
			{isCapped && (
				<tr>
					<td
						colSpan={columnList.length}
						className="p-3 text-gray-600 text-center"
					>
						Only first {rowList.length} results are shown
					</td>
				</tr>
			)}
		</tbody>
	);
}

function useRowList(data: Row[] = []) {
	const MAX_ROW_COUNT = 100;

	const rowList = data.slice(0, MAX_ROW_COUNT);
	const isCapped = rowList.length < data.length;

	return { rowList, isCapped };
}

function getKey(row: Row, column: string) {
	const cell = row[column];
	return [column, cell].join("_");
}
