import RouterLink from "next/link";
import { Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import { ThemeToggleButton } from "./ThemeToggleButton";
import { Logo } from "./Logo";

export function NavBar() {
	const bg = useColorModeValue("gray.700", "gray.900");

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
					<Logo />
				</a>
			</RouterLink>
			<HStack>
				<ThemeToggleButton />
			</HStack>
		</Flex>
	);
}
