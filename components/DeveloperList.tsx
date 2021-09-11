import useDeveloperSearch from "hooks/useDeveloperSearch";

import Table from "./Table";

type Props = {
	data?: any[];
	onClick?: (token: string) => void;
};

export default function DevelopersList({ data, onClick }: Props) {
	const handleClick = (item: any) => {
		onClick?.(item);
	};

	return (
		<Table
			caption="List of developers by token id and attributes"
			data={data}
			onClick={handleClick}
		/>
	);
}
