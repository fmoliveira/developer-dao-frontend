type Row = Record<string, string>;

type Props = {
	caption: string;
	data: Row[];
};

export default function Table({ caption, data }: Props) {
	const firstRow = data?.[0] ?? {};
	const columnList = Object.keys(firstRow);

	return (
		<table className="w-full">
			<caption>{caption}</caption>
			<TableHeader columnList={columnList} />
			<TableBody data={data} columnList={columnList} />
		</table>
	);
}

type TableHeaderProps = {
	columnList: string[];
};

function TableHeader({ columnList }: TableHeaderProps) {
	return (
		<thead>
			<tr>
				{columnList.map((column) => (
					<th key={column}>{column}</th>
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
		<tbody>
			{rowList.map((row) => (
				<tr key={row.id}>
					{columnList.map((column) => (
						<td key={getKey(row, column)}>{row[column]}</td>
					))}
				</tr>
			))}
			{isCapped && (
				<tr>
					<td colSpan={columnList.length}>
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
