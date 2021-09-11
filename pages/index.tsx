import Button from "components/Button";
import CommunityLinks from "components/CommunityLinks";
import DeveloperDetails from "components/DeveloperDetails";
import DeveloperList from "components/DeveloperList";

import useWallet from "hooks/useWallet";
import { useState } from "react";

export default function Home() {
	const { connectWallet } = useWallet();
	const [token, selectToken] = useState("");

	const handleClaim = () => {};

	return (
		<>
			<h1 className="text-xl font-bold my-2">Developer DAO</h1>
			<CommunityLinks />
			<Button onClick={connectWallet}>Connect Wallet</Button>
			<DeveloperList onClick={selectToken} />
			{token && (
				<DeveloperDetails
					token={token}
					onClaim={handleClaim}
					onClose={() => selectToken("")}
				/>
			)}
		</>
	);
}
