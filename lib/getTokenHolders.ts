import Web3 from "web3";
import NftReference from "@0xcert/ethereum-erc721/build/erc721.json";

const INFURA_ENDPOINT = process.env.INFURA_ENDPOINT;
const DEV_DAO_CONTRACT = process.env.DEV_DAO_CONTRACT;

type DeveloperTokenList = Record<string, string>;

export default async function getTokenHolders(): Promise<DeveloperTokenList> {
	const provider = new Web3.providers.HttpProvider(INFURA_ENDPOINT);
	const client = new Web3(provider);
	const abi: any = NftReference.ERC721.abi;
	const contract = new client.eth.Contract(abi, DEV_DAO_CONTRACT);

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
