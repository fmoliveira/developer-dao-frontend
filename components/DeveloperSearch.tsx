import {
	Container,
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";

import TextInput from "./TextInput";

type Props = {
	onChange: (filter: string) => void;
	resultCount: number;
	visibleCount: number;
};

export default function DeveloperSearch({
	onChange,
	resultCount,
	visibleCount,
}: Props) {
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
					<Input
						type="text"
						onChange={(event) => onChange?.(event.target.value)}
					/>
					<FormHelperText>
						Enter keywords separated by spaces or commas
					</FormHelperText>
				</FormControl>
			</Container>
			<Text>{resultsMessage}</Text>
		</VStack>
	);
}
