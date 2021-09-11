import { useState } from "react";

import Button from "components/Button";
import CommunityLinks from "components/CommunityLinks";
import DeveloperDetails from "components/DeveloperDetails";
import DeveloperList from "components/DeveloperList";
import DeveloperSearch from "components/DeveloperSearch";

import useDeveloperSearch from "hooks/useDeveloperSearch";
import useWallet from "hooks/useWallet";

export default function Home() {
	const { connectWallet, claimToken } = useWallet();

	const { setFilter, developerMap, resultList, resultCount, visibleCount } =
		useDeveloperSearch();
	const [token, selectToken] = useState(null);

	return (
		<>
			<h1 className="text-xl font-bold my-2">Developer DAO</h1>
			<CommunityLinks />
			<Button onClick={connectWallet}>Connect Wallet</Button>
			<DeveloperSearch
				onChange={setFilter}
				resultCount={resultCount}
				visibleCount={visibleCount}
			/>
			<DeveloperList data={resultList} onClick={selectToken} />
			{token && (
				<DeveloperDetails
					token={token}
					details={developerMap.get(token.id)}
					onClaim={claimToken}
					onClose={() => selectToken("")}
				/>
			)}
		</>
	);
}
