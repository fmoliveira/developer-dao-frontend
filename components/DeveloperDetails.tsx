import {
	Button,
	HStack,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

import DeveloperCard from "./DeveloperCard";

type Props = {
	token: any;
	isMainNet: boolean;
	onClaim: (tokenId: string) => void;
	onClose: () => void;
};

export default function DeveloperDetails({
	token,
	isMainNet,
	onClaim,
	onClose,
}: Props) {
	if (!token) {
		return null;
	}

	const WrongNetworkFooter = () => (
		<HStack>
			<Text>Please switch to Mainnet</Text>
			<Button type="button" onClick={onClose}>
				Close
			</Button>
		</HStack>
	);

	const DeveloperClaimedFooter = () => (
		<HStack>
			<Button type="button" colorScheme="red" disabled>
				Claimed
			</Button>
			<Button type="button" onClick={onClose}>
				Close
			</Button>
		</HStack>
	);

	const DeveloperAvailableFooter = () => (
		<HStack>
			<Button
				type="button"
				colorScheme="green"
				onClick={() => onClaim(token.id)}
			>
				Claim
			</Button>
			<Button type="button" onClick={onClose}>
				Cancel
			</Button>
		</HStack>
	);

	const developerFooter = token.available ? (
		<DeveloperAvailableFooter />
	) : (
		<DeveloperClaimedFooter />
	);
	const networkFooter = !isMainNet ? <WrongNetworkFooter /> : developerFooter;

	return (
		<Modal size="xl" isOpen onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Developer #{token.id}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<DeveloperCard
						os={token.os}
						textEditor={token.textEditor}
						clothing={token.clothing}
						language={token.language}
						industry={token.industry}
						location={token.location}
						mind={token.mind}
						vibe={token.vibe}
					/>
				</ModalBody>
				<ModalFooter>{networkFooter}</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
