import { Container, Text, VStack } from "@chakra-ui/layout";

export function Header() {
	return (
		<Container maxW="container.md" textAlign="center">
			<VStack>
				<Text>
					Find your next Developer DAO token with your favourite attributes and
					available to claim!
				</Text>
				<Text>
					With a token you will get access to special channels on the Developer
					DAO community, where you can connect with other builds and create
					amazing things together.
				</Text>
			</VStack>
		</Container>
	);
}
