import DataTable from "./DataTable";

type Props = {
	columns: string[];
	data?: any[];
	onClick?: (token: string) => void;
};

export default function DevelopersList({ columns, data, onClick }: Props) {
	const handleClick = (item: any) => {
		onClick?.(item);
	};

	return (
		<DataTable
			caption="List of developers by token id and attributes"
			columns={columns}
			data={data}
			onClick={handleClick}
		/>
	);
}
