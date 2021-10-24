import { useEffect, useState } from "react";
import {
	Checkbox,
	Container,
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";

type Props = {
	onChange: ({ search: string, onlyAvailable: boolean }) => void;
	resultCount: number;
	visibleCount: number;
};

export default function DeveloperSearch({
	onChange,
	resultCount,
	visibleCount,
}: Props) {
	const [search, setSearch] = useState("");
	const [onlyAvailable, setOnlyAvailable] = useState(false);

	useEffect(() => {
		onChange?.({ search, onlyAvailable });
	}, [onChange, search, onlyAvailable]);

	const bg = useColorModeValue("gray.300", "gray.700");

	const resultsMessage =
		resultCount !== visibleCount
			? `Showing first ${visibleCount} results from a total of ${resultCount} matches`
			: `Showing ${resultCount} matches`;

	return (
		<VStack w="full">
			<Container
				maxW="container.lg"
				p={[2, 4]}
				borderWidth={1}
				borderColor={bg}
				borderRadius={5}
				boxShadow="md"
			>
				<FormControl>
					<FormLabel>Search by attributes</FormLabel>
					<VStack spacing={2} alignItems="flex-start">
						<Input
							type="text"
							onChange={(event) => setSearch?.(event.target.value)}
						/>
						<FormHelperText>
							Enter keywords separated by spaces or commas
						</FormHelperText>
						<Checkbox
							colorScheme="green"
							onChange={(ev) => setOnlyAvailable(ev.target.checked)}
						>
							Show only available tokens
						</Checkbox>
					</VStack>
				</FormControl>
			</Container>
			<Text>{resultsMessage}</Text>
		</VStack>
	);
}
