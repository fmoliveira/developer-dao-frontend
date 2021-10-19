import RouterLink from "next/link";
import { Flex, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function NavBar() {
	const bg = useColorModeValue("gray.700", "gray.900");
	const color = useColorModeValue("white", "black");

	return (
		<Flex
			px={[4, 8]}
			py={[2, 4]}
			w="full"
			justifyContent="space-between"
			bg={bg}
			color={"white"}
		>
			<RouterLink href="/">
				<a>
					<Heading size="lg">Developer DAO</Heading>
				</a>
			</RouterLink>
			<HStack>
				<ThemeToggleButton />
			</HStack>
		</Flex>
	);
}
