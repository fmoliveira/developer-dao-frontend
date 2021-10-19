import { Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

export function Layout({ children }) {
	const mainBg = useColorModeValue("gray.50", "gray.800");

	return (
		<VStack minH="100vh" gridGap={[4, 8]} pb={10} bg={mainBg}>
			<NavBar />
			<Container maxW="container.xl">{children}</Container>
		</VStack>
	);
}
