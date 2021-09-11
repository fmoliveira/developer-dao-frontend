import { ethers } from "ethers";

import DevDao from "contracts/DevDao.json";

const DEV_DAO_CONTRACT = "0x25ed58c027921e14d86380ea2646e3a1b5c55a8b";

declare global {
	interface Window {
		ethereum: ethers.providers.ExternalProvider;
	}
}

export default function useWallet() {
	if (typeof window === "undefined") {
		return {};
	}

	if (typeof window.ethereum === "undefined") {
		return {};
	}

	if (!window.ethereum.request) {
		return {};
	}

	const connectWallet = async () => {
		await window.ethereum.request({ method: "eth_requestAccounts" });
	};

	const claimToken = async (token: string) => {
		await connectWallet();

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(DEV_DAO_CONTRACT, DevDao, signer);

		const transaction = await contract.claim(token);
		await transaction.wait();
	};

	return { connectWallet, claimToken };
}
