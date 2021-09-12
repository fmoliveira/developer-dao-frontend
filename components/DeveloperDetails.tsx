import DeveloperCard from "./DeveloperCard";
import Modal from "./Modal";

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
	const WrongNetworkFooter = () => (
		<div className="flex-1 flex items-center">
			<div className="flex-1 text-red-500 font-bold">
				Please switch to Mainnet
			</div>
			<button
				type="button"
				className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				onClick={onClose}
			>
				Close
			</button>
		</div>
	);

	const DeveloperClaimedFooter = () => (
		<>
			<button
				type="button"
				className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm opacity-50 cursor-not-allowed"
				disabled
			>
				Claimed
			</button>
			<button
				type="button"
				className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				onClick={onClose}
			>
				Close
			</button>
		</>
	);

	const DeveloperAvailableFooter = () => (
		<>
			<button
				type="button"
				className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
				onClick={() => onClaim(token.id)}
			>
				Claim
			</button>
			<button
				type="button"
				className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				onClick={onClose}
			>
				Cancel
			</button>
		</>
	);

	const developerFooter = token.available ? (
		<DeveloperAvailableFooter />
	) : (
		<DeveloperClaimedFooter />
	);
	const networkFooter = !isMainNet ? <WrongNetworkFooter /> : developerFooter;

	return (
		<Modal
			title={`Developer #${token.id}`}
			footer={networkFooter}
			onClose={onClose}
		>
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
		</Modal>
	);
}
