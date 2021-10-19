import {
	Box,
	HStack,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
} from "@chakra-ui/react";

type Row = Record<string, any>;

type Props = {
	caption: string;
	columns: string[];
	data: Row[];
	onClick?: (item: any) => void;
};

export default function DataTable({ caption, columns, data, onClick }: Props) {
	return (
		<Table size="sm">
			<TableCaption>{caption}</TableCaption>
			<TableHeader columns={columns} />
			<TableBody columns={columns} data={data} onClick={onClick} />
		</Table>
	);
}

type TableHeaderProps = {
	columns: string[];
};

function TableHeader({ columns }: TableHeaderProps) {
	return (
		<Thead>
			<Tr>
				{columns.map((column) => (
					<Th scope="col" key={column}>
						{column}
					</Th>
				))}
			</Tr>
		</Thead>
	);
}

type TableBodyProps = {
	data: Row[];
	columns: string[];
	onClick?: (item: any) => void;
};

function TableBody({ data, columns, onClick }: TableBodyProps) {
	return (
		<Tbody>
			{data.map((row) => (
				<Tr key={row.id} onClick={() => onClick(row)}>
					{columns.map((column) => (
						<Td key={`${row.id}_${column}`}>
							<CellValue value={row[column]} />
						</Td>
					))}
				</Tr>
			))}
		</Tbody>
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
			<HStack>
				<Box
					w="5px"
					h="5px"
					rounded="full"
					bg={value === true ? "green.500" : "red.500"}
				/>
				<Text>{value ? "Available" : "Claimed"}</Text>
			</HStack>
		);
	}

	return <>{String(value)}</>;
}
