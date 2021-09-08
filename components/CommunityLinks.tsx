const linkList = [
	[
		"Etherscan",
		"https://etherscan.io/token/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b",
	],
	["Twitter", "https://twitter.com/developer_dao"],
	[
		"How to mint",
		"https://twitter.com/developer_dao/status/1433960989033119749",
	],
];

export default function CommunityLinks() {
	return (
		<nav className="py-4 flex gap-4">
			{linkList.map(([label, url]) => (
				<a
					key={label}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline"
				>
					{label}
				</a>
			))}
		</nav>
	);
}
