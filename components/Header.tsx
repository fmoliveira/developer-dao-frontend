import { Container, Text, HStack, VStack, Link } from "@chakra-ui/layout";

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
					DAO community, where you can connect with other builders and create
					amazing things together.
				</Text>
				<HStack pt={5}>
					<Text>Official Developer DAO website: </Text>
					<Link href="https://www.developerdao.com/" isExternal>
						<Text as="span" fontWeight="bold" size="sm">
							www.developerdao.com
						</Text>
					</Link>
				</HStack>
			</VStack>
		</Container>
	);
}
