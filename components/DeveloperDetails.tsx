import Modal from "./Modal";

type Props = {
	token: any;
	details: any;
	onClaim: (tokenId: string) => void;
	onClose: () => void;
};

const attributes = [
	"os",
	"textEditor",
	"clothing",
	"language",
	"industry",
	"location",
	"mind",
	"vibe",
];

export default function DeveloperDetails({
	token,
	details,
	onClaim,
	onClose,
}: Props) {
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

	return (
		<Modal
			title={`Developer #${token.id}`}
			footer={
				token.available ? (
					<DeveloperAvailableFooter />
				) : (
					<DeveloperClaimedFooter />
				)
			}
			onClose={onClose}
		>
			<ul>
				{attributes.map((key) => (
					<li key={key}>{details[key]}</li>
				))}
			</ul>
		</Modal>
	);
}
