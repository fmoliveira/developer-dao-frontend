const classNames = (...args: string[]) => args.join(" ");

type Row = Record<string, any>;

type Props = {
	caption: string;
	columns: string[];
	data: Row[];
	onClick?: (item: any) => void;
};

export default function Table({ caption, columns, data, onClick }: Props) {
	return (
		<div className="shadow overflow-hidden border border-gray-600 sm:rounded-lg">
			<table className="min-w-full">
				<caption className="sr-only">{caption}</caption>
				<TableHeader columns={columns} />
				<TableBody columns={columns} data={data} onClick={onClick} />
			</table>
		</div>
	);
}

type TableHeaderProps = {
	columns: string[];
};

function TableHeader({ columns }: TableHeaderProps) {
	return (
		<thead className="bg-gray-700 border-b border-gray-600">
			<tr>
				{columns.map((column) => (
					<th
						scope="col"
						className="p-3 text-xs font-medium text-pink-300 uppercase tracking-wider"
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
	columns: string[];
	onClick?: (item: any) => void;
};

function TableBody({ data, columns, onClick }: TableBodyProps) {
	return (
		<tbody className="bg-gray-800 divide-y divide-gray-600">
			{data.map((row) => (
				<tr
					key={row.id}
					className={classNames(
						"text-gray-100 hover:bg-gray-600 cursor-pointer",
						row.available === true && "hover:bg-green-300 hover:text-gray-800",
						row.available === false && "hover:bg-red-300 hover:text-gray-800",
					)}
					onClick={() => onClick(row)}
				>
					{columns.map((column) => (
						<td
							key={`${row.id}_${column}`}
							className="px-3 py-2 whitespace-nowrap"
						>
							<CellValue value={row[column]} />
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
}

type CellValueProps = {
	value: any;
};

function CellValue({ value }: CellValueProps) {
	if (typeof value === "undefined") {
		return <>...</>;
	}

	if (typeof value === "boolean") {
		return (
			<div className="flex items-center">
				<span
					className={classNames(
						"mr-2 inline-block p-1 bg-gray-500 rounded-md",
						value === true && "bg-green-500",
						value === false && "bg-red-500",
					)}
				/>
				{value ? "Available" : "Claimed"}
			</div>
		);
	}

	return <>{String(value)}</>;
}
