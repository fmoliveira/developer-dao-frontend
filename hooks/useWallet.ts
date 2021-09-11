declare global {
	interface Window {
		ethereum: any;
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

	const connectWallet = () => {
		window.ethereum.request({ method: "eth_requestAccounts" });
	};

	return { connectWallet };
}
