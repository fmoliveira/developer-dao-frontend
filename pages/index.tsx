import Button from "components/Button";
import CommunityLinks from "components/CommunityLinks";
import DevelopersList from "components/DevelopersList";

import useWallet from "hooks/useWallet";

export default function Home() {
	const { connectWallet } = useWallet();

	return (
		<>
			<h1 className="text-xl font-bold my-2">Developer DAO</h1>
			<CommunityLinks />
			<Button onClick={connectWallet}>Connect Wallet</Button>
			<DevelopersList />
		</>
	);
}
