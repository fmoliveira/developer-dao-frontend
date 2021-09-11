import getContract from "./getContract";

type DeveloperTokenList = Record<string, string>;

export default async function getTokenHolders(): Promise<DeveloperTokenList> {
	const contract = getContract();

	const tokens: DeveloperTokenList = {};
	const events = await contract.getPastEvents("Transfer", {
		fromBlock: 0,
		toBlock: "latest",
	});
	events.forEach((event) => {
		tokens[event.returnValues._tokenId] = event.returnValues._to;
	});

	return tokens;
}
