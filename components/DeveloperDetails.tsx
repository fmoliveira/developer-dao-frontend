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

const ownerReserved = (tokenId: number) => tokenId > 7777;

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

	const ErrorFooter = ({ children }: { children: string }) => (
		<HStack>
			<Text>{children}</Text>
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

	const DetailsFooter = () => {
		if (!isMainNet) {
			return <ErrorFooter>Please switch to Mainnet</ErrorFooter>;
		}
		if (ownerReserved(token.id)) {
			return <ErrorFooter>Token reserved for owner</ErrorFooter>;
		}
		if (!token.available) {
			return <DeveloperClaimedFooter />;
		}
		return <DeveloperAvailableFooter />;
	};

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
				<ModalFooter>
					<DetailsFooter />
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
