import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const classNames = (...args: string[]) => args.join(" ");

type Props = {
	walletInstalled: boolean;
	walletConnected: boolean;
	networkName: string;
	isMainNet: boolean;
	loading: boolean;
	connectWallet: () => void;
};

export default function Wallet({
	walletInstalled,
	walletConnected,
	networkName,
	isMainNet,
	loading,
	connectWallet,
}: Props) {
	if (loading) {
		return <div className="h-10" />;
	}

	return (
		<div>
			{!walletInstalled && (
				<Link
					href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related"
					isExternal
				>
					Install MetaMask
					<ExternalLinkIcon mx="2px" />
				</Link>
			)}
			{walletInstalled && !walletConnected && (
				<Button bg="orange.300" onClick={connectWallet}>
					Connect MetaMask
				</Button>
			)}
			{walletConnected && (
				<div>
					<div>
						<span className="mr-2 inline-block p-1 bg-green-400 rounded-md" />
						Wallet Connected
					</div>
					<div
						className={classNames(
							"font-bold",
							isMainNet ? "text-green-400" : "text-red-400",
						)}
					>
						Network: <span className="capitalize">{networkName}</span>
					</div>
					{!isMainNet && (
						<div className="text-red-400 font-bold">
							Please switch to Mainnet
						</div>
					)}
				</div>
			)}
		</div>
	);
}
