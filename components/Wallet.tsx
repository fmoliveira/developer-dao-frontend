import classNames from "classnames";

import Button from "./Button";

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
		<div className="h-16 mb-4 text-center">
			{!walletInstalled && (
				<a
					className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related"
					target="_blank"
					rel="noopener noreferrer"
				>
					Install MetaMask
				</a>
			)}
			{walletInstalled && !walletConnected && (
				<button
					className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
					onClick={connectWallet}
				>
					Connect MetaMask
				</button>
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
