import { ethers } from "ethers";

import DevDao from "contracts/DevDao.json";
import { useEffect, useMemo, useState } from "react";
import useWindowFocus from "./useWindowFocus";

const DEV_DAO_CONTRACT = "0x25ed58c027921e14d86380ea2646e3a1b5c55a8b";

export const WriteStatus = {
	None: 0,
	Connect: 1,
	Request: 2,
	Pending: 3,
};

const EvmName = {
	1: "Mainnet",
};

const EvmChain = {
	Mainnet: 1,
};

declare global {
	interface Window {
		ethereum: ethers.providers.ExternalProvider;
	}
}

export default function useWallet() {
	const [loading, setLoading] = useState(true);
	const [writeLoading, setWriteLoading] = useState(WriteStatus.None);
	const [walletInstalled, setInstalled] = useState(false);
	const [walletConnected, setConnected] = useState(false);
	const [walletNetwork, setNetwork] = useState(null);
	const [walletAccount, setAccount] = useState("");
	const [walletError, setWalletError] = useState(null);
	const networkName = useMemo(() => {
		if (!walletNetwork) {
			return "";
		}
		return EvmName[walletNetwork?.chainId] || walletNetwork.name;
	}, [walletNetwork]);
	const isMainNet = walletNetwork?.chainId === EvmChain.Mainnet;

	const isWindowFocused = useWindowFocus();

	useEffect(() => {
		if (isWindowFocused) {
			// check status whenever the window focus status changes
		}
		const runUpdates = async () => {
			setInstalled(getWalletInstalled());
			setConnected(await getWalletConnected());
			setNetwork(await getNetwork());
			setLoading(false);
		};
		runUpdates();
	}, [isWindowFocused, setInstalled, setConnected, setLoading]);

	const connectWallet = () => {
		if (!window.ethereum) {
			return;
		}

		return window.ethereum
			.request({ method: "eth_requestAccounts" })
			.then((accountList) => {
				const [firstAccount] = accountList;
				setAccount(firstAccount);
			})
			.catch((error) => {
				setWalletError(error);
			});
	};

	return {
		loading,
		writeLoading,
		walletInstalled,
		walletConnected,
		walletNetwork,
		walletAccount,
		walletError,
		networkName,
		isMainNet,
		connectWallet,
		claimToken,
	};
}

function getWalletInstalled() {
	return typeof window.ethereum !== "undefined";
}

async function getWalletConnected() {
	if (!window.ethereum) {
		return false;
	}

	const accountList = await window.ethereum.request({ method: "eth_accounts" });
	return accountList.length !== 0;
}

function getNetwork() {
	if (!window.ethereum) {
		return false;
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	return provider.getNetwork();
}

async function claimToken(token: string) {
	if (!window.ethereum) {
		return;
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(DEV_DAO_CONTRACT, DevDao, signer);

	const transaction = await contract.claim(token);
	await transaction.wait();
}
