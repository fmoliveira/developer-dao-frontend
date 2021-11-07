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
	useColorModeValue,
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
		<Box overflowX="auto" maxW="full">
			<Table size="sm">
				<TableCaption>{caption}</TableCaption>
				<TableHeader columns={columns} />
				<TableBody columns={columns} data={data} onClick={onClick} />
			</Table>
		</Box>
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

const useRowBg = () => {
	const defaultBg = useColorModeValue("gray.200", "gray.700");
	const claimedBg = useColorModeValue("red.100", "red.500");
	const availableBg = useColorModeValue("green.100", "green.500");

	return (available) => {
		if (typeof available === "boolean") {
			return available ? availableBg : claimedBg;
		}

		return defaultBg;
	};
};

function TableBody({ data, columns, onClick }: TableBodyProps) {
	const getHoverBg = useRowBg();

	return (
		<Tbody>
			{data.map((row) => (
				<Tr
					key={row.id}
					_hover={{ cursor: "pointer", bg: getHoverBg(row.available) }}
					onClick={() => onClick(row)}
				>
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
